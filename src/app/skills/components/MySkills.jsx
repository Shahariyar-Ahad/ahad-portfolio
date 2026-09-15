"use client";

import React from "react";
import {
    BarChart,
    Bar,
    YAxis,
    CartesianGrid,
   
    ResponsiveContainer,
    LabelList,
    Cell,
} from "recharts";

const data = [
    { skill: "Delta Force", percentage: 95, fill: "#25211D" },
    { skill: "Loving Girls", percentage: 96, fill: "#A94738" },
    { skill: "Sleep", percentage: 98, fill: "#178236" },
    { skill: "Web  Development", percentage: 60, fill: "#C89F65" },
    { skill: "Football", percentage: 40, fill: "#7A7066" },
    { skill: "Reels", percentage: 100, fill: "#276CF5" },
];

const formatYAxis = (value) => {
    switch (value) {
        case 25:
            return "Newbie";
        case 50:
            return "Geek";
        case 75:
            return "Ninja";
        case 100:
            return "Jedi";
        default:
            return "";
    }
};

const CustomLabel = (props) => {
    const { x, y, width, height, value, index } = props;
    const skillName = data[index].skill;

    // Bar width অনুযায়ী font size
    const fontSize = width < 90 ? 8 : 10;

    // Skill name word অনুযায়ী ভাগ করা
    const words = skillName.split(" ");

    // Bar-এর ভেতরে আনুমানিক কত অক্ষর রাখা যাবে
    const maxCharsPerLine = width < 90 ? 9 : 12;

    const lines = [];
    let currentLine = "";

    words.forEach((word) => {
        if (
            (currentLine + " " + word).trim().length >
            maxCharsPerLine
        ) {
            lines.push(currentLine);
            currentLine = word;
        } else {
            currentLine = (currentLine + " " + word).trim();
        }
    });

    if (currentLine) {
        lines.push(currentLine);
    }

    return (
        <g
            transform={`translate(${x + width / 2}, ${
                y + height / 2
            })`}
        >
            {/* Percentage */}
            <text
                x={0}
                y={-12}
                fill="#F5F0E6"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={width < 90 ? 15 : 22}
                fontWeight="bold"
            >
                {value}%
            </text>

            {/* Skill Name with automatic line break */}
            <text
                x={0}
                y={12}
                fill="#F5F0E6"
                textAnchor="middle"
                fontSize={fontSize}
                fontWeight="bold"
            >
                {lines.map((line, i) => (
                    <tspan
                        key={i}
                        x={0}
                        dy={i === 0 ? 0 : fontSize + 3}
                    >
                        {line}
                    </tspan>
                ))}
            </text>
        </g>
    );
};

export default function MySkills() {
    return (
        <section className="animate-banner1 w-full bg-base-100 px-3 py-12 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl">

                {/* Newspaper Header */}
                <div className="mb-5 flex items-center justify-between border-y-2 border-[#25211D] py-3">
                    <span className="text-[8px] font-bold uppercase tracking-[2px] text-[#5A5147] sm:text-[9px] sm:tracking-[3px]">
                        Skills & Abilities
                    </span>

                    <span className="dm-serif-display text-sm italic text-[#A94738] sm:text-lg">
                        The Portfolio Edition
                    </span>

                    <span className="text-[8px] font-bold uppercase tracking-[2px] text-[#5A5147] sm:text-[9px] sm:tracking-[3px]">
                        2026
                    </span>
                </div>

                {/* Main Newspaper Card */}
                <div className="border-2 border-[#25211D] bg-[#F5F0E6]">

                    {/* Title */}
                    <div className="border-b-2 border-[#25211D] px-4 py-6 sm:px-8">
                        <p className="mb-2 text-[8px] font-bold uppercase tracking-[3px] text-[#A94738] sm:text-[9px] sm:tracking-[4px]">
                            Technical Profile
                        </p>

                        <div className="flex items-end justify-between gap-4">
                            <h2 className="dm-serif-display text-4xl leading-none text-[#25211D] sm:text-5xl lg:text-6xl">
                                My Skills
                            </h2>

                            <span className="hidden text-[9px] font-bold uppercase tracking-[2px] text-[#7A7066] sm:block">
                                Skill Level Report
                            </span>
                        </div>
                    </div>

                    {/* Chart */}
                    <div className="h-[400px] w-full px-0 py-6 sm:h-[500px] sm:px-5 lg:h-[540px]">
                        <ResponsiveContainer
                            width="100%"
                            height="100%"
                        >
                            <BarChart
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 5,
                                    left: 0,
                                    bottom: 10,
                                }}
                                barCategoryGap="15%"
                            >
                                <CartesianGrid
                                    strokeDasharray="2 4"
                                    vertical={false}
                                    stroke="#D8CCB8"
                                />

                                <YAxis
                                    domain={[0, 100]}
                                    ticks={[25, 50, 75, 100]}
                                    tickFormatter={formatYAxis}
                                    axisLine={{
                                        stroke: "#25211D",
                                    }}
                                    tickLine={false}
                                    tick={{
                                        fill: "#5A5147",
                                        fontSize: 10,
                                        fontWeight: 600,
                                    }}
                                    width={48}
                                />

                                <Bar
                                    dataKey="percentage"
                                    radius={[6, 6, 0, 0]}
                                    barSize={80}
                                    maxBarSize={110}
                                    minPointSize={10}
                                >
                                    {data.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={entry.fill}
                                        />
                                    ))}

                                    <LabelList
                                        dataKey="percentage"
                                        content={<CustomLabel />}
                                    />
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Bottom Editorial Note */}
                    <div className="flex flex-col gap-2 border-t-2 border-[#25211D] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                        <p className="text-[8px] font-bold uppercase tracking-[1px] text-[#7A7066] sm:text-[9px] sm:tracking-[2px]">
                            Knowledge • Practice • Experience
                        </p>

                        <p className="dm-serif-display text-sm italic text-[#A94738]">
                            Always learning, always building.
                        </p>
                    </div>
                </div>

                {/* Bottom Line */}
                <div className="mt-4 flex items-center gap-2 border-b border-[#25211D] pb-2 sm:gap-3">
                    <span className="h-px flex-1 bg-[#D8CCB8]" />

                    <span className="dm-serif-display text-[10px] italic text-[#5A5147] sm:text-sm">
                        Technology • Creativity • Engineering
                    </span>

                    <span className="h-px flex-1 bg-[#D8CCB8]" />
                </div>
            </div>
        </section>
    );
}