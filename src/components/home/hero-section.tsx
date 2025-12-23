"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { STATS } from "@/lib/constants/site";

// Neural Network Node Component
function NeuralNode({ x, y, delay = 0, size = 8 }: { x: number; y: number; delay?: number; size?: number }) {
  return (
    <motion.circle
      cx={x}
      cy={y}
      r={size}
      fill="url(#nodeGradient)"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 0.7, 
        scale: 1,
      }}
      transition={{ 
        delay: delay,
        duration: 0.8,
        ease: "easeOut"
      }}
    />
  );
}

// Data Packet Component - Tiny packets
function DataPacket({ 
  startX, 
  startY, 
  endX, 
  endY, 
  angle, 
  direction = 1,
  delay = 0,
  duration = 5
}: { 
  startX: number; 
  startY: number; 
  endX: number; 
  endY: number; 
  angle: number; 
  direction?: number;
  delay?: number;
  duration?: number;
}) {
  const packetRadius = 4; // Circle radius - visible size

  return (
    <motion.circle
      r={packetRadius}
      fill="url(#packetGradient)"
      initial={{ 
        cx: startX,
        cy: startY,
        opacity: 0 
      }}
      animate={{
        cx: [startX, endX],
        cy: [startY, endY],
        opacity: [0, 1, 1, 0]
      }}
      transition={{ 
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: duration * 1.5, // Pause between cycles
        times: [0, 0.05, 0.95, 1] // Fade in quickly, stay visible most of the time, fade out at end
      }}
      style={{
        filter: "drop-shadow(0 0 3px rgba(0, 217, 255, 0.4))",
      }}
    />
  );
}

// Data Link with Bidirectional Packet Flow
function DataLink({ 
  x1, 
  y1, 
  x2, 
  y2, 
  linkDelay = 0,
  packetDelay = 0,
  connectionId = 0
}: { 
  x1: number; 
  y1: number; 
  x2: number; 
  y2: number; 
  linkDelay?: number;
  packetDelay?: number;
  connectionId?: number;
}) {
  // Calculate angle for packet rotation
  const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
  const reverseAngle = Math.atan2(y1 - y2, x1 - x2) * (180 / Math.PI);

  // Slower, more controlled packet flow
  const packetCount = 1; // One packet at a time
  const packetDuration = 6; // Slower for better appeal
  const cyclePause = 2.0; // Pause between forward and reverse

  return (
    <>
      {/* Data Link Line - Appears after nodes - Reduced brightness */}
      <motion.line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="url(#dataLinkGradient)"
        strokeWidth="2.5"
        strokeOpacity="0.4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ 
          delay: linkDelay, 
          duration: 1.5,
          ease: "easeOut"
        }}
        style={{
          filter: "drop-shadow(0 0 2px rgba(255, 0, 128, 0.2))",
        }}
      />

      {/* Forward Direction Packets (x1 -> x2) - Start after link appears */}
      {Array.from({ length: packetCount }).map((_, i) => (
        <DataPacket
          key={`forward-${connectionId}-${i}`}
          startX={x1}
          startY={y1}
          endX={x2}
          endY={y2}
          angle={angle}
          direction={1}
          delay={packetDelay + i * 1}
          duration={packetDuration}
        />
      ))}

      {/* Reverse Direction Packets (x2 -> x1) - Start after forward completes + pause */}
      {Array.from({ length: packetCount }).map((_, i) => (
        <DataPacket
          key={`reverse-${connectionId}-${i}`}
          startX={x2}
          startY={y2}
          endX={x1}
          endY={y1}
          angle={reverseAngle}
          direction={-1}
          delay={packetDelay + packetDuration + cyclePause + i * 1}
          duration={packetDuration}
        />
      ))}
    </>
  );
}

// Neural Network Graphic Component
function NeuralNetworkGraphic() {
  // Define node positions (layered neural network structure)
  const nodes = [
    // Input layer (left)
    { x: 50, y: 100, id: 0 },
    { x: 50, y: 200, id: 1 },
    { x: 50, y: 300, id: 2 },
    { x: 50, y: 400, id: 3 },
    
    // Hidden layer 1 (middle-left)
    { x: 200, y: 80, id: 4 },
    { x: 200, y: 150, id: 5 },
    { x: 200, y: 250, id: 6 },
    { x: 200, y: 320, id: 7 },
    { x: 200, y: 420, id: 8 },
    
    // Hidden layer 2 (middle-right)
    { x: 350, y: 120, id: 9 },
    { x: 350, y: 200, id: 10 },
    { x: 350, y: 280, id: 11 },
    { x: 350, y: 380, id: 12 },
    
    // Output layer (right)
    { x: 500, y: 150, id: 13 },
    { x: 500, y: 250, id: 14 },
    { x: 500, y: 350, id: 15 },
  ];

  // Define connections - Less clustered, selective connections
  const connections = [
    // Input to Hidden 1 - Each input connects to 2-3 hidden nodes
    { from: 0, to: 4 }, { from: 0, to: 5 },
    { from: 1, to: 5 }, { from: 1, to: 6 },
    { from: 2, to: 6 }, { from: 2, to: 7 },
    { from: 3, to: 7 }, { from: 3, to: 8 },
    
    // Hidden 1 to Hidden 2 - Each connects to 2 nodes
    { from: 4, to: 9 }, { from: 4, to: 10 },
    { from: 5, to: 10 }, { from: 5, to: 11 },
    { from: 6, to: 11 }, { from: 6, to: 12 },
    { from: 7, to: 11 }, { from: 7, to: 12 },
    { from: 8, to: 12 },
    
    // Hidden 2 to Output - Each connects to 1-2 output nodes
    { from: 9, to: 13 },
    { from: 10, to: 13 }, { from: 10, to: 14 },
    { from: 11, to: 14 }, { from: 11, to: 15 },
    { from: 12, to: 15 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="relative hidden md:block h-[500px] w-full"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 550 500"
        className="overflow-visible"
      >
        {/* Gradient Definitions - Reduced Brightness */}
        <defs>
          <linearGradient id="dataLinkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF0080" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#FF0080" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF0080" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.6" />
          </linearGradient>
          <radialGradient id="packetGradient">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#FF0080" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.5" />
          </radialGradient>
        </defs>

        {/* Draw nodes FIRST */}
        {nodes.map((node, index) => (
          <NeuralNode
            key={node.id}
            x={node.x}
            y={node.y}
            delay={index * 0.1}
            size={index < 4 ? 6 : index < 13 ? 8 : 10}
          />
        ))}

        {/* Draw data links AFTER nodes appear */}
        {connections.map((conn, index) => {
          const fromNode = nodes[conn.from];
          const toNode = nodes[conn.to];
          // Calculate proper sequencing - ensure each phase completes
          const lastNodeEnd = (nodes.length - 1) * 0.1 + 0.8; // ~2.4s - all nodes complete
          const linkDelay = lastNodeEnd + 0.5 + (index * 0.05); // Start after nodes complete, stagger links
          const lastLinkEnd = lastNodeEnd + 0.5 + (connections.length - 1) * 0.05 + 1.5; // ~4.4s - all links complete
          const packetDelay = lastLinkEnd + 0.5; // Start after ALL links complete
          
          return (
            <DataLink
              key={`${conn.from}-${conn.to}`}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              linkDelay={linkDelay}
              packetDelay={packetDelay}
              connectionId={index}
            />
          );
        })}
      </svg>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black flex items-center pt-20 md:pt-24">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="text-left">
        
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Badge 
                variant="outline" 
                className="border-gray-900 text-gray-600 text-sm"
              >
                Building Q1 Portfolio — 4 Agencies Remaining
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight mb-6 leading-[1.1]"
            >
              <span className="block text-white">Craft Your AI</span>
              <span className="block text-white">Workforce</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed"
            >
              Custom AI trained on <span className="text-white font-semibold">your data</span>. 
              Integrated with <span className="text-white font-semibold">your systems</span>. 
              Scaled without <span className="text-white font-semibold">headcount</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-gray-100 h-12 px-6 text-base font-medium"
              >
                <Link href="/contact">
                  Book Discovery Call
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 h-12 px-6 text-base"
              >
                <Link href="/joe">Meet Joe</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right: Neural Network Animation */}
          <NeuralNetworkGraphic />
        </div>
      </div>
    </section>
  );
}

