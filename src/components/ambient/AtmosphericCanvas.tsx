"use client";

import { useEffect, useRef } from "react";

export default function AtmosphericCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvasElement = canvasRef.current;
    if (!canvasElement) return;

    const canvasContext = canvasElement.getContext("2d");
    if (!canvasContext) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let animationFrameIdentifier: number;
    let canvasWidth = (canvasElement.width = canvasElement.offsetWidth);
    let canvasHeight = (canvasElement.height = canvasElement.offsetHeight);

    const handleWindowResize = () => {
      if (!canvasElement) return;
      canvasWidth = canvasElement.width = canvasElement.offsetWidth;
      canvasHeight = canvasElement.height = canvasElement.offsetHeight;
    };

    window.addEventListener("resize", handleWindowResize);

    let animationStep = 0;

    const renderAtmosphericFlow = () => {
      animationStep += 0.008;
      canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);

      const horizontalCenter = canvasWidth / 2;
      const verticalCenter = canvasHeight / 2;

      const primaryFlowGradient = canvasContext.createRadialGradient(
        horizontalCenter + Math.sin(animationStep) * 60,
        verticalCenter + Math.cos(animationStep * 0.8) * 40,
        30,
        horizontalCenter,
        verticalCenter,
        Math.max(canvasWidth, canvasHeight) * 0.55
      );

      primaryFlowGradient.addColorStop(0, "rgba(212, 121, 58, 0.18)");
      primaryFlowGradient.addColorStop(0.35, "rgba(184, 117, 87, 0.1)");
      primaryFlowGradient.addColorStop(0.7, "rgba(41, 58, 48, 0.05)");
      primaryFlowGradient.addColorStop(1, "rgba(26, 32, 25, 0)");

      canvasContext.fillStyle = primaryFlowGradient;
      canvasContext.fillRect(0, 0, canvasWidth, canvasHeight);

      canvasContext.save();
      canvasContext.strokeStyle = "rgba(245, 242, 233, 0.06)";
      canvasContext.lineWidth = 1.2;

      for (let waveIndex = 0; waveIndex < 3; waveIndex++) {
        canvasContext.beginPath();
        const baseFrequency = 0.002 + waveIndex * 0.0008;
        const wavePhase = animationStep + waveIndex * 1.5;

        for (let coordinateX = 0; coordinateX < canvasWidth; coordinateX += 16) {
          const breathingWaveY =
            verticalCenter +
            Math.sin(coordinateX * baseFrequency + wavePhase) * (25 + waveIndex * 12) +
            Math.cos(coordinateX * 0.001 - wavePhase * 0.5) * 20;

          if (coordinateX === 0) {
            canvasContext.moveTo(coordinateX, breathingWaveY);
          } else {
            canvasContext.lineTo(coordinateX, breathingWaveY);
          }
        }
        canvasContext.stroke();
      }

      canvasContext.restore();
      animationFrameIdentifier = requestAnimationFrame(renderAtmosphericFlow);
    };

    renderAtmosphericFlow();

    return () => {
      cancelAnimationFrame(animationFrameIdentifier);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
