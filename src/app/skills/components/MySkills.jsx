"use client";

import React from "react";
import {
    BarChart,
    Bar,
    YAxis,
    CartesianGrid,
    Cell,
    ResponsiveContainer,
    LabelList,
} from "recharts";

const data = [
    { skill: "Delta Force", percentage: 95, fill: "#25211D" },
    { skill: "Battlefield", percentage: 93, fill: "#A94738" },
    { skill: "Sleep", percentage: 97, fill: "#178236" },
    { skill: "Web Development", percentage: 50, fill: "#C89F65" },
    { skill: "Football", percentage: 60, fill: "#7A7066" },
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

    return (
        <g
            transform={`translate(${x + width / 2}, ${
                y + height / 2
            })`}
        >
            <text
                x={0}
                y={-8}
                fill="#F5F0E6"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="22"
                fontWeight="bold"
            >
                {value}%
            </text>

            <text
                x={0}
                y={18}
                fill="#F5F0E6"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="10"
                fontWeight="bold"
            >
                {skillName}
            </text>
        </g>
    );
};

export default function MySkills() {
    return (
        <section className="w-full bg-base-100 px-5 py-12 sm:px-8 lg:px-12 animate-banner1">
            <div className="mx-auto max-w-6xl">

                {/* Newspaper Header */}
                <div className="mb-5 flex items-center justify-between border-y-2 border-[#25211D] py-3">
                    <span className="text-[9px] font-bold uppercase tracking-[3px] text-[#5A5147]">
                        Skills & Abilities
                    </span>

                    <span className="dm-serif-display text-lg italic text-[#A94738]">
                        The Portfolio Edition
                    </span>

                    <span className="text-[9px] font-bold uppercase tracking-[3px] text-[#5A5147]">
                        2026
                    </span>
                </div>

                {/* Main Newspaper Card */}
                <div className="border-2 border-[#25211D] bg-[#F5F0E6]">

                    {/* Title */}
                    <div className="border-b-2 border-[#25211D] px-5 py-6 sm:px-8">
                        <p className="mb-2 text-[9px] font-bold uppercase tracking-[4px] text-[#A94738]">
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
                    <div className="h-[430px] w-full px-2 py-6 sm:h-[500px] sm:px-5 lg:h-[540px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 15,
                                    left: 5,
                                    bottom: 10,
                                }}
                                barCategoryGap="12%"
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
                                        fontSize: 11,
                                        fontWeight: 600,
                                    }}
                                    width={55}
                                />

                                <Bar
                                    dataKey="percentage"
                                    radius={[6, 6, 0, 0]}
                                    barSize={110}
                                    maxBarSize={130}
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
                    <div className="flex flex-col gap-2 border-t-2 border-[#25211D] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                        <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#7A7066]">
                            Knowledge • Practice • Experience
                        </p>

                        <p className="dm-serif-display text-sm italic text-[#A94738]">
                            Always learning, always building.
                        </p>
                    </div>
                </div>

                {/* Bottom Line */}
                <div className="mt-4 flex items-center gap-3 border-b border-[#25211D] pb-2">
                    <span className="h-px flex-1 bg-[#D8CCB8]" />

                    <span className="dm-serif-display text-xs italic text-[#5A5147] sm:text-sm">
                        Technology • Creativity • Engineering
                    </span>

                    <span className="h-px flex-1 bg-[#D8CCB8]" />
                </div>
            </div>
        </section>
    );
}