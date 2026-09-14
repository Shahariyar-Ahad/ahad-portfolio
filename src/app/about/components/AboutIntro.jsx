

"use client";

import React from "react";

const AboutIntro = () => {
    const cards = [
        {
            number: "01",
            title: "Engineering",
            text: "EEE student with practical knowledge of electrical work, house wiring, and real-world problem solving.",
        },
        {
            number: "02",
            title: "Web Development",
            text: "Exploring web design and frontend development through practical projects and continuous learning.",
        },
        {
            number: "03",
            title: "My Dream",
            text: "Build my own livestock and agricultural business and create something meaningful that belongs to me.",
        },
    ];

    const tags = [
        "Technology",
        "Engineering",
        "Business",
        "Livestock",
        "Nature",
        "A Simple Life",
    ];

    return (
        <section className="w-full bg-[#0D0D0D] px-5 py-16 text-[#F1EEE8] sm:px-8 sm:py-20 lg:px-12 lg:py-24">

            <div className="mx-auto max-w-6xl">

                {/* HEADER */}
                <div className="border-y-2 border-[#34312D] py-4">
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[3px] text-[#8E8982]">
                        <span>Personal Journal</span>
                        <span>About • 2026</span>
                    </div>
                </div>

                {/* INTRO */}
                <div className="grid gap-8 border-b border-[#34312D] py-10 lg:grid-cols-[1fr_2fr] lg:items-end">

                    <p className="text-xs font-bold uppercase tracking-[4px] text-[#A94738]">
                        01 — My Journey
                    </p>

                    <div>
                        <h1 className="dm-serif-display-italic text-5xl leading-[0.95] text-[#F1EEE8] md:text-7xl lg:text-8xl">
                            More than just
                            <span className="block text-[#A94738]">
                                a developer.
                            </span>
                        </h1>

                       
                    </div>
                </div>

                {/* JOURNEY */}
                <div className="grid gap-12 py-12 lg:grid-cols-[1.4fr_0.8fr]">

                    <div>
                        <div className="mb-6 flex items-center gap-4">
                            <span className="text-xs font-bold uppercase tracking-[3px] text-[#F1EEE8]">
                                The Story
                            </span>

                            <span className="h-px flex-1 bg-[#34312D]" />
                        </div>

                        <div className="columns-1 gap-8 md:columns-2">

                            <p className="dm-serif-display mb-6 text-[17px] leading-8 text-white">
                                My journey has taken me through different areas.
                                I’m currently studying Electrical and Electronic
                                Engineering, and I also have practical knowledge
                                of house wiring and electrical work.
                            </p>

                            <p className="dm-serif-display mb-6 text-[17px] leading-8 text-white">
                                Alongside engineering, I became interested in web
                                design and frontend development. I enjoy creating
                                clean and simple websites and learning how
                                technology can turn an idea into something real.
                            </p>

                            <p className="dm-serif-display text-[17px] leading-8 text-white">
                                I use AI as a learning and development tool while
                                working on projects. I’m still improving my coding
                                skills, and I see every project as another
                                opportunity to learn something new.
                            </p>

                        </div>

                        <div className="mt-10 border-t border-[#34312D] pt-7">

                            <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-[#A94738]">
                                02 — Beyond Work
                            </p>

                            <p className="dm-serif-display max-w-2xl text-[17px] leading-8 text-[#B8B2AA]">
                                I currently live in Dhaka with my family. I enjoy
                                learning different skills and exploring different
                                possibilities instead of limiting myself to just
                                one field.
                            </p>

                        </div>
                    </div>

                    {/* EDITORIAL CARDS */}
                    <div className="border-l-0 border-[#34312D] lg:border-l lg:pl-8">

                        {cards.map((card) => (
                            <div
                                key={card.number}
                                className="border-b border-[#34312D] py-6 first:pt-0"
                            >

                                <div className="flex items-start justify-between">

                                    <span className="dm-serif-display text-3xl text-[#A94738]">
                                        {card.number}
                                    </span>

                                    <span className="text-xs font-bold uppercase tracking-[2px] text-[#8E8982]">
                                        Profile
                                    </span>

                                </div>

                                <h3 className="dm-serif-display mt-4 text-2xl font-bold text-[#F1EEE8]">
                                    {card.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-[#96918A]">
                                    {card.text}
                                </p>

                            </div>
                        ))}

                    </div>
                </div>

                {/* VISION */}
             <div className="relative overflow-hidden border-y-2 border-[#34312D]">

    {/* Background Image */}
    <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/farm.png')" }}
    />

    {/* Subtle Dark Overlay */}
    <div className="absolute inset-0 bg-[#0D0D0D]/25" />

    <div className="relative z-10 px-6 py-14 sm:px-10 lg:px-14">

        <div className="flex items-center justify-between">

            <span className="text-xs font-bold uppercase tracking-[3px] text-[#F1EEE8]">
                03 — My Vision
            </span>

            <span className="dm-serif-display text-2xl text-[#F1EEE8]">
                未来
            </span>

        </div>

        <div className="mt-16 max-w-3xl">

            <h2 className="dm-serif-display text-5xl leading-none text-[#F1EEE8] md:text-7xl">
                I want to build

                <span className="block text-[#F3C1AE]">
                    a life of my own.
                </span>
            </h2>

            <div className="mt-8 space-y-4">

                <p className="dm-serif-display text-[17px] leading-8 text-[#F1EEE8] drop-shadow-[0_2px_3px_rgba(0,0,0,0.65)]">
                    One of my biggest dreams is to build my own
                    livestock and agricultural firm where I can
                    raise cows and goats and grow it into a
                    sustainable business.
                </p>

                <p className="dm-serif-display text-[17px] leading-8 text-[#F1EEE8] drop-shadow-[0_2px_3px_rgba(0,0,0,0.65)]">
                    I imagine a peaceful life surrounded by nature
                    — my own land, a pond, trees, animals, and a
                    simple environment where I can enjoy both my
                    work and my life.
                </p>

                <p className="dm-serif-display text-[17px] leading-8 text-[#F1EEE8] drop-shadow-[0_2px_3px_rgba(0,0,0,0.65)]">
                    My goal is not only to become an engineer or a
                    developer. I want to use the skills I learn in
                    technology, engineering, and business to
                    eventually build something of my own.
                </p>

            </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-2">

            {tags.map((tag) => (
                <span
                    key={tag}
                    className="border border-[#F1EEE8]/50 bg-[#0D0D0D]/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#F1EEE8]"
                >
                    {tag}
                </span>
            ))}

        </div>

    </div>
</div>

                {/* FOOTER STATEMENT */}
                <div className="mt-8 flex flex-col gap-4 border-t border-[#34312D] pt-6 sm:flex-row sm:items-center sm:justify-between">

                    <p className="dm-serif-display text-lg italic text-[#96918A]">
                        Different skills, different interests — one direction.
                    </p>

                    <span className="text-xs font-bold uppercase tracking-[2px] text-[#A94738]">
                        Keep learning. Keep building.
                    </span>

                </div>

            </div>
        </section>
    );
};

export default AboutIntro;



