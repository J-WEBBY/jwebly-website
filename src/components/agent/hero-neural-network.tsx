"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Pause, Brain } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Neuron {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  connections: number[];
  active: boolean;
  charge: number;
}

export function HeroNeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const neuronsRef = useRef<Neuron[]>([]);

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

    // Initialize neurons
    const neuronCount = 50;
    const neurons: Neuron[] = [];

    for (let i = 0; i < neuronCount; i++) {
      neurons.push({
        x: Math.random() * 400 - 200,
        y: Math.random() * 400 - 200,
        z: Math.random() * 400 - 200,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: (Math.random() - 0.5) * 0.5,
        connections: [],
        active: Math.random() > 0.7,
        charge: Math.random(),
      });
    }

    // Create connections
    neurons.forEach((neuron, i) => {
      const connectionCount = Math.floor(Math.random() * 3) + 2;
      for (let j = 0; j < connectionCount; j++) {
        const targetIndex = Math.floor(Math.random() * neuronCount);
        if (targetIndex !== i && !neuron.connections.includes(targetIndex)) {
          neuron.connections.push(targetIndex);
        }
      }
    });

    neuronsRef.current = neurons;

    let rotation = 0;
    let animationId: number;

    const draw = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      if (!isPaused) {
        rotation += 0.003;

        // Update neuron charges (simulate firing)
        neurons.forEach((neuron) => {
          if (neuron.active) {
            neuron.charge += 0.05;
            if (neuron.charge > 1) {
              neuron.charge = 0;
              neuron.active = Math.random() > 0.3;
            }
          } else {
            if (Math.random() > 0.98) {
              neuron.active = true;
              neuron.charge = 0;
            }
          }
        });
      }

      // Rotate neurons
      const rotatedNeurons = neurons.map((neuron) => {
        const cosR = Math.cos(rotation);
        const sinR = Math.sin(rotation);
        const x = neuron.x * cosR - neuron.z * sinR;
        const z = neuron.x * sinR + neuron.z * cosR;
        
        // Mouse interaction
        const dx = mousePos.x - centerX;
        const dy = mousePos.y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const force = Math.max(0, 100 - distance) / 100;
        
        const scale = 250 / (250 + z);
        return {
          ...neuron,
          screenX: centerX + x * scale + dx * force * 0.1,
          screenY: centerY + neuron.y * scale + dy * force * 0.1,
          scale: scale,
          z: z,
        };
      });

      // Sort by z-depth
      rotatedNeurons.sort((a, b) => a.z - b.z);

      // Draw connections
      rotatedNeurons.forEach((neuron, i) => {
        neuron.connections.forEach((targetIndex) => {
          const target = rotatedNeurons[targetIndex];
          if (!target) return;

          // Connection strength based on neuron activity
          const strength = (neuron.charge + target.charge) / 2;
          const alpha = neuron.active || target.active ? strength * 0.6 : 0.15;

          ctx.strokeStyle = neuron.active || target.active 
            ? `rgba(229, 82, 123, ${alpha})`
            : `rgba(64, 64, 64, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(neuron.screenX, neuron.screenY);
          ctx.lineTo(target.screenX, target.screenY);
          ctx.stroke();

          // Particle animation on active connections
          if ((neuron.active || target.active) && strength > 0.5) {
            const progress = strength;
            const particleX = neuron.screenX + (target.screenX - neuron.screenX) * progress;
            const particleY = neuron.screenY + (target.screenY - neuron.screenY) * progress;
            
            ctx.fillStyle = `rgba(229, 82, 123, ${strength})`;
            ctx.beginPath();
            ctx.arc(particleX, particleY, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      });

      // Draw neurons
      rotatedNeurons.forEach((neuron) => {
        const size = Math.max(1, 8 * neuron.scale); // Ensure size is at least 1
        
        // Glow for active neurons
        if (neuron.active) {
          const glowRadius = Math.max(1, size * 3); // Ensure glow radius is at least 1
          const gradient = ctx.createRadialGradient(
            neuron.screenX,
            neuron.screenY,
            0,
            neuron.screenX,
            neuron.screenY,
            glowRadius
          );
          gradient.addColorStop(0, `rgba(229, 82, 123, ${neuron.charge * 0.5})`);
          gradient.addColorStop(1, "rgba(229, 82, 123, 0)");
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(neuron.screenX, neuron.screenY, glowRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Neuron body
        ctx.fillStyle = "#0A0A0A";
        ctx.beginPath();
        ctx.arc(neuron.screenX, neuron.screenY, size, 0, Math.PI * 2);
        ctx.fill();

        // Neuron border
        ctx.strokeStyle = neuron.active 
          ? `rgba(229, 82, 123, ${neuron.charge})`
          : "#262626";
        ctx.lineWidth = 2 * neuron.scale;
        ctx.stroke();

        // Neuron core
        if (neuron.active) {
          ctx.fillStyle = `rgba(229, 82, 123, ${neuron.charge})`;
          ctx.beginPath();
          ctx.arc(neuron.screenX, neuron.screenY, size * 0.4, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", updateSize);
    };
  }, [isPaused, mousePos]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

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
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Brain className="w-6 h-6 text-accent" />
              </div>
              <div className="text-xs font-semibold text-gray-600 tracking-widest uppercase">
                Autonomous AI Agent
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              An AI That
              <br />
              Thinks for
              <br />
              Itself
            </h1>

            <p className="text-xl text-gray-400 mb-4 leading-relaxed">
              Not a workflow. Not a system.
            </p>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              An intelligent agent that learns from every decision 
              and adapts in real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-gray-100 h-14 px-8"
              >
                <a href="#agent-builder">
                  Design My Agent
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gray-900 hover:bg-gray-950 h-14 px-8"
              >
                <a href="#how-agent-learns">
                  <Play className="mr-2 w-5 h-5" />
                  See Agent in Action
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-sm text-gray-600 mb-1">Investment</div>
                <div className="text-2xl font-bold text-white">£7,000-12,000</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Timeline</div>
                <div className="text-2xl font-bold text-white">8-12 weeks</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Capability</div>
                <div className="text-2xl font-bold text-accent">Autonomous</div>
              </div>
            </div>
          </motion.div>

          {/* Right: 3D Neural Network */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
            onMouseMove={handleMouseMove}
          >
            <div className="aspect-square bg-background-elevated border border-gray-900 rounded-2xl overflow-hidden relative">
              <canvas
                ref={canvasRef}
                className="w-full h-full cursor-pointer"
                style={{ display: "block" }}
              />

              {/* Controls */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  {isPaused ? (
                    <Play className="w-4 h-4 text-gray-400" />
                  ) : (
                    <Pause className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </div>

              {/* Label */}
              <div className="absolute bottom-4 left-4 space-y-1">
                <div className="text-xs text-gray-600">
                  Neural Decision Network
                </div>
                <div className="text-xs text-accent">
                  {neuronsRef.current.filter((n) => n.active).length} neurons firing
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-6 text-center text-sm text-gray-600"
            >
              Interactive neural network - move your mouse to see agent respond
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

