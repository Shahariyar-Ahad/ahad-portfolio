

"use client";

import React from "react";

const AboutIntro = () => {
    const achievements = [
        {
            number: "01",
            title: "Champion, EEE Project Showcase",
            place: "United International University",
        },
        {
            number: "02",
            title: "Dr. Monir Scholarship & Award",
            place: "Recipient — 2020",
        },
        {
            number: "03",
            title: "Web Development Course",
            place: "Programming Hero",
        },
    ];

    const activities = [
        {
            number: "01",
            title: "University Sports Club",
            place: "United International University",
            text: "Actively participate in inter-department sports events and tournaments.",
        },
        {
            number: "02",
            title: "UIU EEE Club",
            place: "United International University",
            text: "Involved in organizing and participating in department-level programs and events.",
        },
        {
            number: "03",
            title: "Blood Donor & Volunteer",
            place: "Community Service",
            text: "Regularly donate blood and participate in blood donation campaigns.",
        },
        {
            number: "04",
            title: "Disaster Relief Volunteer",
            place: "Bangladesh",
            text: "Participate in flood relief efforts by helping collect and distribute essential supplies to affected communities.",
        },
    ];

    const hobbies = [
        "Reading Books",
        "Watching Movies & TV Series",
        "Playing Football",
    ];

    return (
        <section className="w-full overflow-hidden bg-[#0D0D0D] px-5 py-12 text-[#F1EEE8] sm:px-8 sm:py-16 lg:px-12 lg:py-20">

            <div className="mx-auto max-w-6xl">

                {/* HEADER */}
                <header className="border-y border-[#34312D] py-4">

                    <div className="flex items-center justify-between gap-4 text-[9px] font-bold uppercase tracking-[3px] text-[#8E8982] sm:text-[10px]">

                        <span>
                            Personal Journal
                        </span>

                        <span>
                            About • 2026
                        </span>

                    </div>

                </header>


                {/* HERO */}

                <div className="grid gap-8 border-b border-[#34312D] py-12 lg:grid-cols-[0.65fr_2fr] lg:items-end lg:py-16">

                    <div>

                        <p className="text-xs font-bold uppercase tracking-[4px] text-[#A94738]">
                            01 — My Journey
                        </p>

                        <p className="mt-5 max-w-xs text-sm leading-7 text-[#8E8982]">
                            Engineering student, developer, learner,
                            and someone who wants to build a life
                            beyond a single profession.
                        </p>

                    </div>


                    <div>

                        <h1 className="dm-serif-display-italic text-5xl leading-[0.92] text-[#F1EEE8] sm:text-6xl md:text-7xl lg:text-8xl">

                            More than just

                            <span className="block text-[#A94738]">
                                a developer.
                            </span>

                        </h1>

                    </div>

                </div>


                {/* STORY */}

                <div className="border-b border-[#34312D] py-12 lg:py-16">

                    <div className="mb-8 flex items-center gap-4">

                        <span className="text-xs font-bold uppercase tracking-[3px]">
                            The Story
                        </span>

                        <span className="h-px flex-1 bg-[#34312D]" />

                        <span className="text-xs text-[#8E8982]">
                            01
                        </span>

                    </div>


                    <div className="max-w-4xl space-y-6">

                        <p className="dm-serif-display text-[18px] leading-8 text-[#F1EEE8]">

                            My journey has taken me through different
                            areas. I love exploring, learning new things,
                            and discovering new ideas.

                            I’m currently studying Electrical and Electronic
                            Engineering at{" "}
                            <span className="font-bold text-[#ED500D]">
                                United International University
                            </span>
                            . I also have practical knowledge of house
                            wiring, electrical work, circuits, and electronics.

                        </p>


                        <p className="dm-serif-display text-[18px] leading-8 text-[#F1EEE8]">

                            Although my academic background is in EEE, I have developed a strong passion for web development and software engineering. I work mainly with JavaScript, React, Node.js, Express.js, MongoDB, and Next.js, and I enjoy building modern, responsive, and user-friendly web applications.
                        </p>


                        <p className="dm-serif-display text-[18px] leading-8 text-[#F1EEE8]">

                            I consider myself a quick learner and a problem
                            solver. I enjoy learning new technologies and
                            turning ideas into real-world products.

                        </p>


                        <p className="dm-serif-display text-[18px] leading-8 text-[#F1EEE8]">

                            I use AI as a learning and development tool while
                            working on projects. I’m still improving my coding
                            skills, and I see every project as another
                            opportunity to learn something new.

                        </p>

                    </div>


                    {/* BEYOND WORK */}

                    <div className="mt-12 border-t border-[#34312D] pt-8">

                        <div className="mb-5 flex items-center justify-between">

                            <p className="text-xs font-bold uppercase tracking-[3px] text-[#A94738]">
                                02 — Beyond Work
                            </p>

                            <span className="text-xs text-[#8E8982]">
                                LIFE
                            </span>

                        </div>


                        <p className="dm-serif-display max-w-3xl text-[18px] leading-8 text-[#B8B2AA]">

                            I currently live in Dhaka with my family.
                            I enjoy learning different skills and exploring
                            different possibilities instead of limiting
                            myself to just one field.

                        </p>

                    </div>

                </div>


                {/* ACHIEVEMENTS */}

                <section className="border-b border-[#34312D] py-12 lg:py-16">

                    <div className="grid gap-10 lg:grid-cols-[0.7fr_1.8fr]">

                        <div>

                            <p className="text-xs font-bold uppercase tracking-[3px] text-[#A94738]">
                                03 — Achievements
                            </p>

                            <h2 className="dm-serif-display mt-4 text-4xl leading-tight sm:text-5xl">
                                Things I’m proud of.
                            </h2>

                        </div>


                        <div>

                            {achievements.map((item) => (

                                <div
                                    key={item.number}
                                    className="group grid grid-cols-[50px_1fr] border-t border-[#34312D] py-6 last:border-b"
                                >

                                    <span className="text-sm text-[#A94738]">
                                        {item.number}
                                    </span>


                                    <div>

                                        <h3 className="dm-serif-display text-xl font-bold transition-colors group-hover:text-[#A94738] sm:text-2xl">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 text-sm uppercase tracking-[1.5px] text-[#8E8982]">
                                            {item.place}
                                        </p>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>


                {/* EXTRACURRICULAR & VOLUNTEER */}

                <section className="border-b border-[#34312D] py-12 lg:py-16">

                    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

                        <div>

                            <p className="text-xs font-bold uppercase tracking-[3px] text-[#A94738]">
                                04 — Activities
                            </p>

                            <h2 className="dm-serif-display mt-4 text-4xl sm:text-5xl">
                                Beyond the classroom.
                            </h2>

                        </div>


                        <p className="max-w-sm text-sm leading-7 text-[#8E8982]">
                            Experiences, communities, and activities
                            that have shaped me outside academics.
                        </p>

                    </div>


                    <div className="grid gap-px overflow-hidden border border-[#34312D] bg-[#34312D] sm:grid-cols-2">

                        {activities.map((activity) => (

                            <div
                                key={activity.number}
                                className="bg-[#0D0D0D] p-7 transition-colors hover:bg-[#141414] sm:p-8"
                            >

                                <div className="flex items-center justify-between">

                                    <span className="text-xs text-[#A94738]">
                                        {activity.number}
                                    </span>

                                    <span className="text-[9px] font-bold uppercase tracking-[2px] text-[#8E8982]">
                                        Activity
                                    </span>

                                </div>


                                <h3 className="dm-serif-display mt-8 text-2xl font-bold">
                                    {activity.title}
                                </h3>


                                <p className="mt-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#A94738]">
                                    {activity.place}
                                </p>


                                <p className="mt-5 text-sm leading-7 text-[#96918A]">
                                    {activity.text}
                                </p>

                            </div>

                        ))}

                    </div>

                </section>


                {/* HOBBIES */}

                <section className="py-12 lg:py-16">

                    <div className="grid gap-8 lg:grid-cols-[0.7fr_1.8fr] lg:items-center">

                        <div>

                            <p className="text-xs font-bold uppercase tracking-[3px] text-[#A94738]">
                                05 — Hobbies
                            </p>

                            <h2 className="dm-serif-display mt-4 text-4xl sm:text-5xl">
                                When I’m not working.
                            </h2>

                        </div>


                        <div className="flex flex-wrap gap-3">

                            {hobbies.map((hobby) => (

                                <span
                                    key={hobby}
                                    className="border border-[#34312D] bg-[#151515] px-5 py-3 text-xs font-bold uppercase tracking-[1.5px] text-[#B8B2AA] transition-colors hover:border-[#A94738] hover:text-[#F1EEE8]"
                                >
                                    {hobby}
                                </span>

                            ))}

                        </div>

                    </div>

                </section>


                {/* FOOTER */}

                <footer className="flex flex-col gap-4 border-t border-[#34312D] pt-6 sm:flex-row sm:items-center sm:justify-between">

                    <p className="dm-serif-display text-lg italic text-[#96918A]">
                        Different skills, different interests — one direction.
                    </p>

                    <span className="text-xs font-bold uppercase tracking-[2px] text-[#A94738]">
                        Keep learning. Keep building.
                    </span>

                </footer>

            </div>

        </section>
    );
};

export default AboutIntro;






