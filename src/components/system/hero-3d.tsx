"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Pause } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    // Define nodes (workflows) in 3D space
    const nodes = [
      { x: 0, y: -80, z: 0, label: "Input", color: "#E5527B" },
      { x: -100, y: 0, z: 50, label: "Process", color: "#E5527B" },
      { x: 100, y: 0, z: 50, label: "Coordinate", color: "#E5527B" },
      { x: -80, y: 80, z: -30, label: "Output", color: "#E5527B" },
      { x: 80, y: 80, z: -30, label: "Report", color: "#E5527B" },
      { x: 0, y: 160, z: 0, label: "Monitor", color: "#E5527B" },
    ];

    // Define connections
    const connections = [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 4],
      [1, 4],
      [3, 5],
      [4, 5],
    ];

    let rotation = 0;
    let animationId: number;

    const draw = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      if (!isPaused) {
        rotation += 0.005;
      }

      // Rotate nodes
      const rotatedNodes = nodes.map((node) => {
        const cosR = Math.cos(rotation);
        const sinR = Math.sin(rotation);
        const x = node.x * cosR - node.z * sinR;
        const z = node.x * sinR + node.z * cosR;
        const scale = 200 / (200 + z);
        return {
          ...node,
          screenX: centerX + x * scale,
          screenY: centerY + node.y * scale,
          scale: scale,
          z: z,
        };
      });

      // Draw connections (before sorting)
      ctx.strokeStyle = "#262626";
      ctx.lineWidth = 1;
      connections.forEach(([i, j]) => {
        const nodeA = rotatedNodes[i];
        const nodeB = rotatedNodes[j];
        if (nodeA && nodeB) {
          ctx.beginPath();
          ctx.moveTo(nodeA.screenX, nodeA.screenY);
          ctx.lineTo(nodeB.screenX, nodeB.screenY);
          ctx.stroke();
        }
      });

      // Sort by z-depth (furthest first) for drawing order
      rotatedNodes.sort((a, b) => a.z - b.z);

      // Draw nodes
      rotatedNodes.forEach((node) => {
        // Outer glow
        const gradient = ctx.createRadialGradient(
          node.screenX,
          node.screenY,
          0,
          node.screenX,
          node.screenY,
          20 * node.scale
        );
        gradient.addColorStop(0, `${node.color}40`);
        gradient.addColorStop(1, `${node.color}00`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.screenX, node.screenY, 20 * node.scale, 0, Math.PI * 2);
        ctx.fill();

        // Node circle
        ctx.fillStyle = "#0A0A0A";
        ctx.beginPath();
        ctx.arc(node.screenX, node.screenY, 12 * node.scale, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = node.color;
        ctx.lineWidth = 2 * node.scale;
        ctx.stroke();

        // Inner dot
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.screenX, node.screenY, 4 * node.scale, 0, Math.PI * 2);
        ctx.fill();

        // Label
        ctx.fillStyle = "#666";
        ctx.font = `${10 * node.scale}px Inter`;
        ctx.textAlign = "center";
        ctx.fillText(node.label, node.screenX, node.screenY + 30 * node.scale);
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", updateSize);
    };
  }, [isPaused]);

  return (
    <section className="bg-black min-h-screen flex items-center relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-xs font-semibold text-gray-600 mb-4 tracking-widest uppercase">
              Intelligent Automation System
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Your Complete
              <br />
              Operational
              <br />
              Upgrade
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              5-7 interconnected workflows working as a unified system.
              Not isolated tasks—intelligent coordination.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-gray-100 h-14 px-8"
              >
                <Link href="#joe-chat">
                  Talk to Joe About Your System
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gray-900 hover:bg-gray-950 h-14 px-8"
              >
                <a href="#workflow-builder">
                  See System in Action
                  <Play className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-sm text-gray-600 mb-1">Price</div>
                <div className="text-2xl font-bold text-white">£3,000-5,000</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Timeline</div>
                <div className="text-2xl font-bold text-white">6-8 weeks</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Workflows</div>
                <div className="text-2xl font-bold text-white">5-7 interconnected</div>
              </div>
            </div>
          </motion.div>

          {/* Right: 3D Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-background-elevated border border-gray-900 rounded-2xl overflow-hidden relative">
              <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{ display: "block" }}
              />

              {/* Pause/Play button */}
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                {isPaused ? (
                  <Play className="w-4 h-4 text-gray-400" />
                ) : (
                  <Pause className="w-4 h-4 text-gray-400" />
                )}
              </button>

              {/* Label */}
              <div className="absolute bottom-4 left-4 text-xs text-gray-600">
                Workflow System Network
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-6 text-center text-sm text-gray-600"
            >
              Interactive 3D visualization of interconnected workflows
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

