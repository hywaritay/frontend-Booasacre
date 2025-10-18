"use client"

import {useEffect, useRef} from "react";

export function WaveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        let time = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const drawWave = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const isDark = document.documentElement.classList.contains("dark");

            // Create multiple wave layers
            for (let i = 0; i < 3; i++) {
                ctx.beginPath();

                const amplitude = 60 + i * 20;
                const frequency = 0.01 + i * 0.005;
                const phase = time * 0.01 + (i * Math.PI) / 3;
                const yOffset = canvas.height * (0.7 + i * 0.1);

                for (let x = 0; x <= canvas.width; x += 2) {
                    const y = yOffset + Math.sin(x * frequency + phase) * amplitude;
                    if (x === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }

                ctx.lineTo(canvas.width, canvas.height);
                ctx.lineTo(0, canvas.height);
                ctx.closePath();

                // Gradient colors based on theme
                const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
                if (isDark) {
                    gradient.addColorStop(0, `rgba(59, 130, 246, ${0.1 - i * 0.03})`);
                    gradient.addColorStop(1, `rgba(147, 51, 234, ${0.05 - i * 0.015})`);
                } else {
                    gradient.addColorStop(0, `rgba(59, 130, 246, ${0.15 - i * 0.04})`);
                    gradient.addColorStop(1, `rgba(147, 51, 234, ${0.08 - i * 0.02})`);
                }
                ctx.fillStyle = gradient;
                ctx.fill();
            }
            time += 1;
            animationId = requestAnimationFrame(drawWave);
        };

        resizeCanvas();
        drawWave();

        window.addEventListener("resize", resizeCanvas);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{background: "transparent"}}
        />
    );
}
