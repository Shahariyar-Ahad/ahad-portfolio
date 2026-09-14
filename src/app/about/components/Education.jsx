
"use client";

import React, { useState } from "react";

const Education = () => {
    const education = [
        {
            level: "University",
            character: "🎓",
            degree: "Bachelor of Electrical and Electronic Engineering (EEE)",
            institution: "United International University",
            location: "Dhaka, Bangladesh",
            year: "2023 — Present",
            result: "Currently Studying",
        },
        {
            level: "College",
            character: "🏛️",
            degree: "Higher Secondary Certificate (HSC)",
            subject: "Science",
            institution: "Bangladesh Navy College",
            location: "Dhaka, Bangladesh",
            year: "2020",
            result: "GPA: 5.00 / 5.00",
        },
        {
            level: "School",
            character: "🏫",
            degree: "Secondary School Certificate (SSC)",
            subject: "Science",
            institution: "Banani Bidyaniketan School and College",
            location: "Dhaka, Bangladesh",
            year: "2018",
            result: "GPA: 5.00 / 5.00",
        },
    ];

    const [flippedCard, setFlippedCard] = useState(null);

    return (
        <section className="w-full bg-[#0D0D0D] px-5 py-16 text-[#F1EEE8] sm:px-8 sm:py-20 lg:px-12 lg:py-24">

            <div className="mx-auto max-w-6xl">

                {/* Header */}
                <div className="border-y-2 border-[#34312D] py-4 text-center">
                    <p className="text-[9px] font-bold uppercase tracking-[4px] text-[#8E8982] sm:text-[10px]">
                        Education • Academic Record
                    </p>
                </div>

                {/* Title */}
                <div className="py-10 text-center">

                    <h2 className="dm-serif-display text-4xl leading-tight text-[#F1EEE8] sm:text-5xl lg:text-6xl">
                        My Academic{" "}
                        <span className="text-[#A94738]">
                            Journey.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#B8B2AA] sm:text-base">
                        My educational journey has given me a foundation in
                        engineering, science, technology, and problem-solving.
                    </p>

                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {education.map((item, index) => (
                        <div
                            key={index}
                            onClick={() =>
                                setFlippedCard(
                                    flippedCard === index ? null : index
                                )
                            }
                            className="group h-[410px] cursor-pointer [perspective:1200px]"
                        >
                            <div
                                className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
                                    flippedCard === index
                                        ? "[transform:rotateY(180deg)]"
                                        : "group-hover:[transform:rotateY(180deg)]"
                                }`}
                            >

                                {/* ================= FRONT ================= */}
                              {/* Front */}
<div className="absolute inset-0 flex flex-col overflow-hidden border border-[#34312D] bg-[#24211E] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.25)] [backface-visibility:hidden]">
                                    {/* Top */}
                                    <div className="flex items-center justify-between border-b border-[#34312D] pb-3">

                                        <span className="text-[9px] font-bold uppercase tracking-[3px] text-[#A94738]">
                                            {item.level}
                                        </span>

                                        <span className="text-[9px] font-bold text-[#8E8982]">
                                            {item.year}
                                        </span>

                                    </div>

                                    {/* Icon */}
                                    <div className="flex flex-1 items-center justify-center border-b border-[#34312D]">

                                        <span className="text-7xl grayscale transition duration-500 group-hover:scale-110 group-hover:grayscale-0">
                                            {item.character}
                                        </span>

                                    </div>

                                    {/* Bottom */}
                                    <div className="py-5 text-center">

                                        <h3 className="dm-serif-display text-3xl text-[#F1EEE8]">
                                            {item.level}
                                        </h3>

                                        <p className="mt-2 text-[9px] font-bold uppercase tracking-[2px] text-[#77716A]">
                                            Hover / Tap to explore
                                        </p>

                                    </div>

                                </div>

                                {/* ================= BACK ================= */}
                              {/* Back */}
<div className="absolute inset-0 overflow-hidden border border-[#403A34] bg-[#2B2723] p-6 text-[#F1EEE8] [backface-visibility:hidden] [transform:rotateY(180deg)]">

                                    {/* Back Header */}
                                    <div className="border-b border-[#34312D] pb-4">

                                        <p className="text-[9px] font-bold uppercase tracking-[3px] text-[#A94738]">
                                            {item.level}
                                        </p>

                                        <h3 className="dm-serif-display mt-1 text-2xl text-[#F1EEE8]">
                                            Academic Details
                                        </h3>

                                    </div>

                                    {/* Details */}
                                    <div className="mt-6 space-y-5">

                                        {/* Degree */}
                                        <div>
                                            <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#A94738]">
                                                Degree
                                            </p>

                                            <p className="mt-1 text-sm leading-6 text-[#D2CCC3]">
                                                {item.degree}
                                            </p>
                                        </div>

                                        {/* Subject */}
                                        {item.subject && (
                                            <div>
                                                <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#A94738]">
                                                    Subject
                                                </p>

                                                <p className="mt-1 text-sm text-[#D2CCC3]">
                                                    {item.subject}
                                                </p>
                                            </div>
                                        )}

                                        {/* Institution */}
                                        <div>

                                            <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#A94738]">
                                                Institution
                                            </p>

                                            <p className="mt-1 text-sm leading-5 text-[#F1EEE8]">
                                                {item.institution}
                                            </p>

                                            <p className="mt-1 text-xs text-[#8E8982]">
                                                {item.location}
                                            </p>

                                        </div>

                                        {/* Year + Result */}
                                        <div className="grid grid-cols-2 gap-3 border-t border-[#34312D] pt-4">

                                            <div>
                                                <p className="text-[8px] font-bold uppercase tracking-[2px] text-[#A94738]">
                                                    Year
                                                </p>

                                                <p className="mt-1 text-xs text-[#D2CCC3]">
                                                    {item.year}
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-[8px] font-bold uppercase tracking-[2px] text-[#A94738]">
                                                    Result
                                                </p>

                                                <p className="mt-1 text-xs text-[#D2CCC3]">
                                                    {item.result}
                                                </p>
                                            </div>

                                        </div>

                                    </div>

                                    {/* Footer */}
                                    <div className="absolute bottom-5 left-6 right-6 border-t border-[#34312D] pt-2">

                                        <p className="text-[8px] font-bold uppercase tracking-[3px] text-[#66615B]">
                                            Portfolio Academic Record • 2026
                                        </p>

                                    </div>

                                </div>

                            </div>
                        </div>
                    ))}

                </div>

                {/* Bottom Statement */}
                <div className="mt-12 flex flex-col gap-4 border-t border-[#34312D] pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">

                    <p className="max-w-xl text-sm leading-7 text-[#96918A]">
                        Every stage of my education has helped me develop
                        curiosity, discipline, engineering knowledge, and
                        problem-solving skills.
                    </p>

                    <span className="dm-serif-display text-lg italic text-[#A94738]">
                        Learn • Grow • Build
                    </span>

                </div>

            </div>
        </section>
    );
};

export default Education;










