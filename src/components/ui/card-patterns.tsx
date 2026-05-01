import React from "react";

export const PatternWaves = () => (
    <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-4 -right-4 opacity-80 pointer-events-none">
        {[...Array(10)].map((_, i) => (
            <path key={i} d={`M${20 + i*18} 240 C ${20 + i*18} ${140 - i*6}, ${140 - i*6} ${20 + i*18}, 240 ${20 + i*18}`} stroke={i < 5 ? "#a855f7" : "#3b82f6"} strokeWidth="1.5" />
        ))}
    </svg>
);

export const PatternDotsWave = () => (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-4 -right-4 opacity-80 pointer-events-none">
        {[...Array(10)].map((_, i) => (
            <path key={i} d={`M${40 + i*14} 200 C ${40 + i*14} ${120 - i*5}, ${120 - i*5} ${40 + i*14}, 200 ${40 + i*14}`} stroke={i < 5 ? "#0ea5e9" : "#22c55e"} strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" />
        ))}
    </svg>
);

export const PatternChevrons = () => (
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-4 -right-4 opacity-90 pointer-events-none">
        {[...Array(6)].map((_, i) => (
            <path key={i} d={`M${180} ${i*22} L${80 + i*14} ${80 + i*14} L${i*22} ${180}`} stroke="#eab308" strokeWidth="6" strokeLinejoin="miter" />
        ))}
    </svg>
);

export const PatternDotsCircle = () => (
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-6 -right-6 opacity-100 pointer-events-none">
        {[...Array(40)].map((_, i) => {
            const angle = (i * 137.5) * (Math.PI / 180);
            const radius = 20 + Math.sqrt(i) * 12;
            const x = (140 + Math.cos(angle) * radius).toFixed(2);
            const y = (140 + Math.sin(angle) * radius).toFixed(2);
            const r = 2 + (i % 4);
            return <circle key={i} cx={x} cy={y} r={r} fill="#22c55e" />;
        })}
    </svg>
);

export const PatternStripesCircle = () => (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-8 -right-8 opacity-100 pointer-events-none">
        {[...Array(7)].map((_, i) => (
            <circle key={i} cx="200" cy="200" r={50 + i*22} stroke="#f59e0b" strokeWidth="6" strokeDasharray="12 16" />
        ))}
    </svg>
);
