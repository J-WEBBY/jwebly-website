import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    hasKey: !!process.env.ANTHROPIC_API_KEY,
    keyLength: process.env.ANTHROPIC_API_KEY?.length || 0,
    keyPrefix: process.env.ANTHROPIC_API_KEY?.substring(0, 15) || "none",
    nodeEnv: process.env.NODE_ENV,
    allEnvKeys: Object.keys(process.env).filter(k => 
      k.toUpperCase().includes('API') || 
      k.toUpperCase().includes('ANTHROPIC')
    ),
  });
}

