
import React from "react";
import Image from "next/image";

const SkillsBanner = () => {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Git",
        "Firebase",
        "Node.js",
        "Express.js",
        "Electronics",
        "Writing",
        "Responsive Design",
    ];

    return (
        <section className="w-full bg-base-100 px-5 py-10 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl animate-banner3">

                {/* Newspaper Header */}
                <div className="mb-4 flex items-center justify-between border-y border-[#25211D] py-2">
                    <span className="text-[9px] font-bold uppercase tracking-[3px] text-[#5A5147]">
                        Skills
                    </span>

                    <span className="dm-serif-display text-sm italic text-[#A94738]">
                        The Portfolio Edition
                    </span>

                    <span className="text-[9px] font-bold uppercase tracking-[3px] text-[#5A5147]">
                        2026
                    </span>
                </div>

                {/* Main Banner */}
                <div className="grid overflow-hidden border-2 border-[#25211D] lg:grid-cols-2">

                    {/* Image */}
                    <div className="relative flex min-h-[320px] items-center justify-center border-b-2 border-[#25211D] bg-[#EBE3D3] p-6 sm:min-h-[400px] lg:min-h-[500px] lg:border-b-0 lg:border-r-2">
                        <Image
                            src="/assets/skillsCry.png"
                            alt="Shahariyar Ahad"
                            width={500}
                            height={500}
                            priority
                            className="h-auto w-full max-w-[380px] object-contain"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#A94738]" />

                            <span className="text-[9px] font-bold uppercase tracking-[3px] text-[#5A5147]">
                                Technical Profile
                            </span>
                        </div>

                        <h1 className="dm-serif-display text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                            What I can{" "}
                            <span className="text-[#A94738]">do.</span>
                        </h1>

                        <p className="mt-6 max-w-xl text-sm leading-7 text-white sm:text-base">
                            A collection of technical and practical skills
                            developed through learning, building projects,
                            and hands-on experience.
                        </p>

                        {/* Skills */}
                        <div className="mt-7 flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="border border-[#BDB3A5] bg-[#F5F0E6] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#25211D] transition hover:border-[#A94738] hover:bg-[#A94738] hover:text-white sm:text-xs"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Bottom Line */}
                        <div className="mt-8 flex items-center gap-3 border-t border-[#D8CCB8] pt-4">
                            <span className="h-2 w-2 bg-[#A94738]" />
                            <span className="text-[9px] font-bold uppercase tracking-[3px] text-[#7A7066]">
                                Design • Code • Build
                            </span>
                        </div>

                    </div>
                </div>

                {/* Footer */}
                <div className="mt-3 flex items-center gap-3 border-b-2 border-[#25211D] pb-2">
                    <span className="h-px flex-1 bg-[#D8CCB8]" />

                    <span className="dm-serif-display text-xs italic text-[#5A5147]">
                        Technology • Creativity • Engineering
                    </span>

                    <span className="h-px flex-1 bg-[#D8CCB8]" />
                </div>

            </div>
        </section>
    );
};

export default SkillsBanner;
