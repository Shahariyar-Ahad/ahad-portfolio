/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import {
    FaExternalLinkAlt,
    FaGithub,
} from "react-icons/fa";

const ProjectCard = ({ project }) => {
    const {
        title,
        image,
        links,
        status,
        type,
        techStack,
        description,
    } = project;

    const statusClass =
        status === "Completed"
            ? "bg-[#25211D] text-[#F5F0E6]"
            : status === "Upcoming"
                ? "bg-[#A94738] text-white"
                : "bg-[#C89F65] text-[#25211D]";

    return (
        <article
            className="
                group
                flex
                h-[400px]
                w-full
                max-w-[430px]
                flex-col
                overflow-hidden
                border
                border-[#25211D]/70
                bg-[#F1E6CF]
                shadow-[6px_6px_0px_#25211D]
                transition-all
                duration-500
                hover:-translate-y-1.5
                hover:shadow-[9px_10px_0px_#25211D]
            "
        >

            {/* =====================================================
                IMAGE
            ====================================================== */}
            <div
                className="
                    relative
                    flex
                    h-[175px]
                    w-full
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    border-b
                    border-[#25211D]/70
                    bg-[#E8DECA]
                "
            >
                <img
                    src={image}
                    alt={title}
                    className="
                        h-full
                        w-full
                        object-contain
                        p-2
                        transition-transform
                        duration-500
                        group-hover:scale-[1.03]
                    "
                />

                {/* Status */}
                <span
                    className={`
                        absolute
                        right-3
                        top-3
                        px-2.5
                        py-1
                        text-[7px]
                        font-bold
                        uppercase
                        tracking-[1.5px]
                        ${statusClass}
                    `}
                >
                    {status}
                </span>

                {/* Selected Work */}
                <span
                    className="
                        absolute
                        bottom-2.5
                        left-3
                        text-[7px]
                        font-bold
                        uppercase
                        tracking-[2px]
                        text-[#5A5147]/70
                    "
                >
                    Selected Work
                </span>
            </div>


            {/* =====================================================
                CONTENT
            ====================================================== */}
            <div className="flex min-h-0 flex-1 flex-col px-5 py-3">

                {/* Meta */}
                <div className="mb-1 flex items-center gap-1.5">
                    <span
                        className="
                            text-[7px]
                            font-bold
                            uppercase
                            tracking-[2px]
                            text-[#A94738]
                        "
                    >
                        Project
                    </span>

                    <span className="text-[8px] text-[#A09A91]">
                        /
                    </span>

                    <span
                        className="
                            truncate
                            text-[7px]
                            font-bold
                            uppercase
                            tracking-[1.5px]
                            text-[#6F665C]
                        "
                    >
                        {type}
                    </span>
                </div>


                {/* Title */}
                <h2
                    className="
                        caacupe-one-regular
                        truncate
                        text-[2rem]
                        leading-none
                        text-[#25211D]
                    "
                >
                    {title}
                </h2>


                {/* Divider */}
                <div className="my-2 border-t border-[#CFC1AA]" />


                {/* Description */}
                <div className="min-h-0 flex-1 overflow-hidden">
                    <p
                        className="
                            dm-serif-display
                            line-clamp-3
                            text-[13px]
                            leading-[1.25rem]
                            text-[#5A5147]
                        "
                    >
                        {description}
                    </p>
                </div>


                {/* =================================================
                    TECHNOLOGY
                ================================================== */}
                {techStack?.length > 0 && (
                    <div className="mt-2 shrink-0">

                        <p
                            className="
                                mb-1
                                text-[6px]
                                font-bold
                                uppercase
                                tracking-[2px]
                                text-[#7A7066]
                            "
                        >
                            Built With
                        </p>

                        <div className="flex flex-wrap gap-1">

                            {techStack.map((tech, index) => (
                                <span
                                    key={index}
                                    className="
                                        border
                                        border-[#BDB3A5]
                                        bg-[#E8DECA]
                                        px-1.5
                                        py-0.5
                                        text-[6px]
                                        font-bold
                                        uppercase
                                        tracking-[0.5px]
                                        text-[#25211D]
                                    "
                                >
                                    {tech}
                                </span>
                            ))}

                        </div>
                    </div>
                )}


                {/* =================================================
                    FOOTER
                ================================================== */}
                <div className="mt-2 shrink-0 border-t border-[#CFC1AA] pt-2">

                    <div className="mb-2 flex items-center justify-between">

                        <div>
                            <p
                                className="
                                    text-[6px]
                                    font-bold
                                    uppercase
                                    tracking-[1.5px]
                                    text-[#8B8379]
                                "
                            >
                                Category
                            </p>

                            <p
                                className="
                                    dm-serif-display
                                    text-xs
                                    text-[#25211D]
                                "
                            >
                                {type}
                            </p>
                        </div>

                        <span
                            className="
                                text-[7px]
                                font-bold
                                uppercase
                                tracking-[1.5px]
                                text-[#9C9387]
                            "
                        >
                            2026
                        </span>

                    </div>


                    {/* Buttons */}
                    <div className="flex gap-1.5">

                        {links?.live && (
                            <Link
                                href={links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    flex
                                    flex-1
                                    items-center
                                    justify-center
                                    gap-1
                                    bg-[#A94738]
                                    px-2
                                    py-2
                                    text-[7px]
                                    font-bold
                                    uppercase
                                    tracking-[1px]
                                    text-white
                                    transition
                                    hover:bg-[#25211D]
                                "
                            >
                                <FaExternalLinkAlt className="text-[6px]" />
                                Live
                            </Link>
                        )}

                        {links?.server && (
                            <Link
                                href={links.server}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    flex
                                    flex-1
                                    items-center
                                    justify-center
                                    gap-1
                                    bg-[#A94738]
                                    px-2
                                    py-2
                                    text-[7px]
                                    font-bold
                                    uppercase
                                    tracking-[1px]
                                    text-white
                                    transition
                                    hover:bg-[#25211D]
                                "
                            >
                                <FaExternalLinkAlt className="text-[6px]" />
                                Server
                            </Link>
                        )}

                        {links?.github && (
                            <Link
                                href={links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    flex
                                    flex-1
                                    items-center
                                    justify-center
                                    gap-1
                                    border
                                    border-[#25211D]
                                    px-2
                                    py-2
                                    text-[7px]
                                    font-bold
                                    uppercase
                                    tracking-[1px]
                                    text-[#25211D]
                                    transition
                                    hover:bg-[#25211D]
                                    hover:text-[#F5F0E6]
                                "
                            >
                                <FaGithub className="text-[7px]" />
                                GitHub
                            </Link>
                        )}

                        {links?.serverGithub && (
                            <Link
                                href={links.serverGithub}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    flex
                                    flex-1
                                    items-center
                                    justify-center
                                    gap-1
                                    border
                                    border-[#25211D]
                                    px-2
                                    py-2
                                    text-[7px]
                                    font-bold
                                    uppercase
                                    tracking-[1px]
                                    text-[#25211D]
                                    transition
                                    hover:bg-[#25211D]
                                    hover:text-[#F5F0E6]
                                "
                            >
                                <FaGithub className="text-[7px]" />
                                Server
                            </Link>
                        )}

                    </div>
                </div>
            </div>


            {/* =====================================================
                NEWSPAPER FOOTER
            ====================================================== */}
            <div
                className="
                    flex
                    h-[24px]
                    shrink-0
                    items-center
                    justify-between
                    border-t
                    border-[#25211D]/70
                    px-5
                "
            >
                <p
                    className="
                        text-[6px]
                        font-bold
                        uppercase
                        tracking-[2px]
                        text-[#8B8379]
                    "
                >
                    Portfolio • Project Archive
                </p>

                <span
                    className="
                        text-[6px]
                        font-bold
                        text-[#A94738]
                    "
                >
                    01
                </span>
            </div>

        </article>
    );
};

export default ProjectCard;