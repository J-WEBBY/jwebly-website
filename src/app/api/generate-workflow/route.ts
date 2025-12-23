import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "",
});

interface WorkflowResponse {
  industry: string;
  workflows: Array<{
    title: string;
    description: string;
    howItWorks: string[];
    timeSaved: string;
    accuracy: string;
  }>;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { industry, mainWorkflow } = body;

    // Validation
    if (!industry || !mainWorkflow) {
      return NextResponse.json(
        { error: "Industry and mainWorkflow are required" },
        { status: 400 }
      );
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      console.error("ANTHROPIC_API_KEY is not set in environment variables");
      return NextResponse.json(
        { error: "API configuration error" },
        { status: 500 }
      );
    }

    console.log("🤖 Generating workflows for:", industry);
    console.log("📋 Main workflow:", mainWorkflow);

    const systemPrompt = `You are an AI automation consultant for Jwebly, an AI automation agency that takes a diagnostic approach to operational problems.

TASK: Generate exactly 3 realistic workflow automation examples for an Implementation Pilot (£1,500-2,000, 2-3 weeks deployment).

CRITICAL REQUIREMENTS:
1. We diagnose first, prescribe second - examples illustrate what's POSSIBLE
2. Real pilots are customized after discovery audit of client's specific operations
3. Focus on repetitive, document/data-heavy workflows with measurable ROI
4. Examples must be achievable in 2-3 week pilot scope
5. We enhance operations with intelligent automation, not replace humans

OUTPUT FORMAT - Return ONLY valid JSON (no markdown, no code blocks, no explanation):

{
  "industry": "exact industry name from user input",
  "workflows": [
    {
      "title": "Specific Workflow Name (3-7 words)",
      "description": "One sentence explaining what AI does. MUST include 'We'll configure this to...' or 'Tailored to...' to emphasize customization during pilot.",
      "howItWorks": [
        "Concrete step 1 (10-20 words describing specific action)",
        "Concrete step 2 (10-20 words describing specific action)",
        "Concrete step 3 (10-20 words describing specific action)",
        "Concrete step 4 (10-20 words describing specific action)"
      ],
      "timeSaved": "X-Y hours/week (e.g., '8-10 hours/week' - be realistic)",
      "accuracy": "X%+ where X is 85-95, OR specific metric (e.g., 'Zero double-bookings', '92%+ accuracy')"
    }
  ]
}

VALIDATION RULES:
- Generate EXACTLY 3 workflows
- Title: Specific and actionable (NOT generic like "Process Automation")
- Description: Must mention customization/diagnostic approach
- howItWorks: EXACTLY 4 steps, each concrete and industry-specific
- timeSaved: Format must be "X-Y hours/week" where X < Y
- accuracy: Must be realistic percentage or specific metric
- Make examples industry-specific and operational (not strategic consulting)

EXAMPLES OF GOOD TITLES:
✓ "Invoice Processing & Expense Categorization"
✓ "Contract Review & Key Terms Extraction"
✓ "Property Matching & Buyer Alerts"

EXAMPLES OF BAD TITLES:
✗ "Document Automation"
✗ "AI Processing"
✗ "Workflow Optimization"

RETURN ONLY THE JSON OBJECT. NO MARKDOWN FORMATTING.`;

    const userPrompt = `Industry: ${industry}
Main workflow to automate: ${mainWorkflow}

Generate 3 workflow automation examples for an Implementation Pilot.`;

    // Try multiple models (2025 models first, fallback to 2024)
    const MODELS_TO_TRY = [
      "claude-sonnet-4-20250514",      // Latest Sonnet 4 (May 2025)
      "claude-3-7-sonnet-20250219",    // Sonnet 3.7 (Feb 2025)
      "claude-3-5-sonnet-20241022",    // Sonnet 3.5 (Oct 2024)
      "claude-3-5-sonnet-20240620",    // Sonnet 3.5 (June 2024)
      "claude-3-haiku-20240307",       // Haiku (fallback)
    ];

    let message;
    let usedModel = "";
    let lastError;

    for (const model of MODELS_TO_TRY) {
      try {
        console.log(`🔄 Trying model: ${model}`);
        
        message = await anthropic.messages.create({
          model: model,
          max_tokens: 2500,
          system: systemPrompt,
          messages: [
            {
              role: "user",
              content: userPrompt,
            },
          ],
        });

        usedModel = model;
        console.log(`✅ Success with model: ${model}`);
        break;

      } catch (error: any) {
        console.log(`❌ Model ${model} failed:`, error.message);
        lastError = error;
        
        // If it's a 404, try next model
        if (error?.status === 404) {
          continue;
        }
        
        // For other errors, throw immediately
        throw error;
      }
    }

    if (!message) {
      console.error("All models failed. Last error:", lastError);
      throw lastError || new Error("All models failed to respond");
    }

    // Extract response
    const content = message.content[0];
    if (content.type !== "text") {
      throw new Error("Unexpected response type from API");
    }

    let responseText = content.text.trim();
    console.log("📝 Raw response length:", responseText.length);

    // Clean markdown formatting if present
    if (responseText.startsWith("```json")) {
      responseText = responseText.replace(/```json\s*\n?/g, "").replace(/```\s*$/g, "");
    } else if (responseText.startsWith("```")) {
      responseText = responseText.replace(/```\s*\n?/g, "");
    }

    // Parse JSON
    let parsed: WorkflowResponse;
    try {
      parsed = JSON.parse(responseText);
    } catch (parseError) {
      console.error("JSON parse error. Response was:", responseText);
      throw new Error("Failed to parse AI response as JSON");
    }

    // Validate structure
    if (!parsed.workflows || !Array.isArray(parsed.workflows)) {
      throw new Error("Invalid response: missing workflows array");
    }

    if (parsed.workflows.length === 0) {
      throw new Error("No workflows generated");
    }

    // Validate each workflow
    for (let i = 0; i < parsed.workflows.length; i++) {
      const workflow = parsed.workflows[i];
      
      if (!workflow.title || typeof workflow.title !== "string") {
        throw new Error(`Workflow ${i + 1}: Missing or invalid title`);
      }
      if (!workflow.description || typeof workflow.description !== "string") {
        throw new Error(`Workflow ${i + 1}: Missing or invalid description`);
      }
      if (!Array.isArray(workflow.howItWorks)) {
        throw new Error(`Workflow ${i + 1}: howItWorks must be an array`);
      }
      if (workflow.howItWorks.length !== 4) {
        throw new Error(`Workflow ${i + 1}: howItWorks must have exactly 4 steps (got ${workflow.howItWorks.length})`);
      }
      if (!workflow.timeSaved || typeof workflow.timeSaved !== "string") {
        throw new Error(`Workflow ${i + 1}: Missing or invalid timeSaved`);
      }
      if (!workflow.accuracy || typeof workflow.accuracy !== "string") {
        throw new Error(`Workflow ${i + 1}: Missing or invalid accuracy`);
      }
    }

    console.log(`✅ Generated ${parsed.workflows.length} workflows using ${usedModel}`);

    // Return validated response
    return NextResponse.json({
      industry: parsed.industry || industry,
      workflows: parsed.workflows.slice(0, 3), // Max 3
      modelUsed: usedModel, // For debugging
    });

  } catch (error: any) {
    console.error("❌ Workflow generation error:", error);
    
    // Detailed error logging
    if (error?.message) {
      console.error("Error message:", error.message);
    }
    if (error?.status) {
      console.error("Error status:", error.status);
    }
    if (error?.error) {
      console.error("Error details:", JSON.stringify(error.error, null, 2));
    }

    return NextResponse.json(
      { 
        error: error instanceof Error 
          ? error.message 
          : "Failed to generate workflows. Please try again."
      },
      { status: 500 }
    );
  }
}

// Add OPTIONS handler for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
