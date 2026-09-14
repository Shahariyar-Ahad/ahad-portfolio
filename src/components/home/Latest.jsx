"use client";

import React from "react";
import projects from "@/data/projects.json";
import ProjectCard from "../card/ProjectCard";

const Latest = () => {
    return (
        <section className="w-full">

            {/* ================= SECTION HEADER ================= */}
            <div className="my-10 flex items-center gap-3 px-4 sm:gap-5 sm:px-0">

                <div className="flex-1 border-t border-white"></div>

                <span className="dm-serif-display whitespace-nowrap text-center text-xl font-bold sm:text-2xl text-white">
                    SOME OF MY LATEST WORK
                </span>

                <div className="flex-1 border-t border-white"></div>

            </div>


            {/* ================= PROJECT GRID ================= */}
            <div className="w-full px-4 py-10 sm:px-0">

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="flex w-full justify-center"
                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default Latest;
      
