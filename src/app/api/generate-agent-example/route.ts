import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "",
});

const MODELS_TO_TRY = [
  "claude-3-5-sonnet-20241022",
  "claude-3-5-sonnet-20240620",
  "claude-3-opus-20240229",
  "claude-3-haiku-20240307",
];

export async function POST(request: NextRequest) {
  try {
    const { industry, scenario, selectedDomains } = await request.json();

    if (!scenario || !industry) {
      return NextResponse.json(
        { error: "Industry and scenario are required" },
        { status: 400 }
      );
    }

    const prompt = `You are an AI agent designer. Generate a detailed example of how an autonomous agent would handle this decision scenario.

Industry: ${industry}
Decision Domains Available: ${selectedDomains.join(", ") || "General decision-making"}
Scenario: ${scenario}

Generate a response in this exact JSON format:
{
  "scenario": "${scenario}",
  "agentThinking": [
    "Step 1 of agent's reasoning...",
    "Step 2 of agent's reasoning...",
    "Step 3 of agent's reasoning...",
    "Step 4 of agent's reasoning...",
    "Step 5 of agent's reasoning..."
  ],
  "decision": "The specific action the agent takes",
  "confidence": 85,
  "reasoning": "Why the agent made this decision, referencing historical patterns and data",
  "alternativesConsidered": [
    "Alternative 1 and why it wasn't chosen",
    "Alternative 2 and why it wasn't chosen"
  ]
}

Make the thinking process realistic and detailed. Show the agent analyzing data, comparing to patterns, evaluating options, and making a confident decision. The confidence score should reflect decision complexity (85-95). Return ONLY valid JSON, no markdown formatting.`;

    let lastError: any = null;
    
    for (const model of MODELS_TO_TRY) {
      try {
        const response = await anthropic.messages.create({
          model: model,
          max_tokens: 1500,
          messages: [{ role: "user", content: prompt }],
        });

        const content = response.content[0];
        if (content.type !== "text") {
          throw new Error("Unexpected response type");
        }

        // Parse JSON from response
        let text = content.text.trim();
        
        // Remove markdown code blocks if present
        if (text.startsWith("```json")) {
          text = text.replace(/```json\n?/g, "").replace(/```\n?/g, "");
        } else if (text.startsWith("```")) {
          text = text.replace(/```\n?/g, "");
        }
        
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
          throw new Error("Failed to parse JSON response");
        }

        const example = JSON.parse(jsonMatch[0]);
        
        // Validate required fields
        if (!example.scenario || !example.decision || !example.agentThinking) {
          throw new Error("Invalid response structure");
        }

        return NextResponse.json({ example });
      } catch (error: any) {
        lastError = error;
        console.error(`Model ${model} failed:`, error.message);
        continue;
      }
    }

    throw lastError || new Error("All models failed");
  } catch (error: any) {
    console.error("Generation error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate example" },
      { status: 500 }
    );
  }
}

