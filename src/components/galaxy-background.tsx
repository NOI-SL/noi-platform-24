"use client";
import React, { useEffect, useRef } from "react";

const GalaxyBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const stars: {
            angle: number;
            distance: number;
            radius: number;
            speed: number;
            color: string;
            alpha: number;
            alphaChange: number;
        }[] = [];
        
        // 400 stars for a dense, premium feel
        const numStars = 400;

        // RGB values for brand colors: light, peach, orange, pure white
        const colors = [
            "230, 230, 230", // #E6E6E6
            "247, 185, 128", // #F7B980
            "237, 152, 95",  // #ED985F
            "255, 255, 255"  // #ffffff
        ];

        for (let i = 0; i < numStars; i++) {
            // Favor closer distances slightly for a clustered look, but still spread out
            const distance = Math.random() * Math.max(width, height) * 0.8;
            stars.push({
                angle: Math.random() * Math.PI * 2,
                distance: distance,
                radius: Math.random() * 1.5 + 0.2, // Between 0.2 and 1.7
                speed: (Math.random() * 0.0005) + 0.0002, // Slow, elegant rotation
                color: colors[Math.floor(Math.random() * colors.length)],
                alpha: Math.random(),
                alphaChange: (Math.random() * 0.01) - 0.005,
            });
        }

        let animationFrameId: number;

        const draw = () => {
            // Use a slight dark fill with opacity to create a subtle trailing/motion blur effect
            ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
            ctx.fillRect(0, 0, width, height);

            const cx = width / 2;
            const cy = height / 2;

            for (let i = 0; i < numStars; i++) {
                const star = stars[i];

                star.angle += star.speed;
                const x = cx + Math.cos(star.angle) * star.distance;
                const y = cy + Math.sin(star.angle) * star.distance;

                ctx.beginPath();
                ctx.arc(x, y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${star.color}, ${star.alpha})`;
                ctx.fill();

                // Twinkle effect
                star.alpha += star.alphaChange;
                if (star.alpha <= 0.1) {
                    star.alpha = 0.1;
                    star.alphaChange = Math.abs(star.alphaChange);
                } else if (star.alpha >= 1) {
                    star.alpha = 1;
                    star.alphaChange = -Math.abs(star.alphaChange);
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.6, mixBlendMode: "screen" }}
        />
    );
};

export default GalaxyBackground;
