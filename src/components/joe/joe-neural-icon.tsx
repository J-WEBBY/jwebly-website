"use client";

import { motion } from "framer-motion";

interface JoeNeuralIconProps {
  size?: number;
  className?: string;
  interactive?: boolean;
}

export function JoeNeuralIcon({ size = 100, className = "", interactive = false }: JoeNeuralIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient id="joeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF0080" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#FF0080" stopOpacity="1" />
          <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="joeGradientOuter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      
      {/* Central Node - Pulsing */}
      <motion.circle
        cx="50"
        cy="50"
        r="8"
        fill="url(#joeGradient)"
        animate={interactive ? {
          r: [8, 12, 8],
          opacity: [0.6, 1, 0.6],
        } : {
          r: [8, 10, 8],
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Orbiting Nodes */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i * 60) * (Math.PI / 180);
        const radius = 25;
        const x = Math.round((50 + radius * Math.cos(angle)) * 100) / 100;
        const y = Math.round((50 + radius * Math.sin(angle)) * 100) / 100;
        
        return (
          <g key={i}>
            {/* Connection Line */}
            <motion.line
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              stroke="url(#joeGradient)"
              strokeWidth="1.5"
              strokeOpacity="0.4"
              animate={interactive ? {
                strokeOpacity: [0.2, 0.6, 0.2],
              } : {
                strokeOpacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
            {/* Orbiting Node */}
            <motion.circle
              cx={x}
              cy={y}
              r="4"
              fill="url(#joeGradient)"
              animate={interactive ? {
                r: [3, 6, 3],
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1],
              } : {
                r: [3, 5, 3],
                opacity: [0.6, 0.9, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
            {/* Data Packet */}
            {interactive && (
              <motion.circle
                cx={x}
                cy={y}
                r="2"
                fill="#00D9FF"
                animate={{
                  cx: [50, x, 50],
                  cy: [50, y, 50],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              />
            )}
          </g>
        );
      })}
      
      {/* Outer Ring Nodes */}
      {[0, 1, 2, 3].map((i) => {
        const angle = (i * 90) * (Math.PI / 180);
        const radius = 35;
        const x = Math.round((50 + radius * Math.cos(angle)) * 100) / 100;
        const y = Math.round((50 + radius * Math.sin(angle)) * 100) / 100;
        
        return (
          <motion.circle
            key={`outer-${i}`}
            cx={x}
            cy={y}
            r="3"
            fill="url(#joeGradientOuter)"
            animate={interactive ? {
              r: [2, 5, 2],
              opacity: [0.4, 0.9, 0.4],
            } : {
              r: [2, 4, 2],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </svg>
  );
}

