import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    FaEnvelope,
    FaPhone,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

const Contacts = () => {
    const contacts = [
        {
            title: "Email",
            value: "iamahad9743@gmail.com",
            icon: <FaEnvelope />,
            link: "mailto:iamahad9743@gmail.com",
        },
        {
            title: "Phone",
            value: "+880 1766229743",
            icon: <FaPhone />,
            link: "tel:+8801766229743",
        },
        {
            title: "Facebook",
            value: "Connect with me",
            icon: <FaFacebookF />,
            link: "https://www.facebook.com/profile.php?id=61593745201648",
        },
        {
            title: "Instagram",
            value: "Follow me",
            icon: <FaInstagram />,
            link: "https://www.instagram.com/slim_shady9743/",
        },
        {
            title: "LinkedIn",
            value: "Let's connect",
            icon: <FaLinkedinIn />,
            link: "https://www.linkedin.com/in/shahariyar-ahad/",
        },
    ];

    return (
        <section className="w-full bg-base-100 px-5 py-10 text-[#25211D] sm:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl">

                {/* Newspaper Header */}
                <div className="mb-4 flex items-center justify-between border-y border-[#25211D] py-2">
                    <span className="text-[8px] font-bold uppercase tracking-[3px] text-[#5A5147] sm:text-[9px]">
                        Contact
                    </span>

                    <span className="dm-serif-display text-sm italic text-[#A94738] sm:text-base">
                        The Portfolio Edition
                    </span>

                    <span className="text-[8px] font-bold uppercase tracking-[3px] text-[#5A5147] sm:text-[9px]">
                        2026
                    </span>
                </div>

                {/* Contact Banner */}
                <div className="grid overflow-hidden border-2 border-[#25211D] bg-[#EBE3D3] md:grid-cols-2 animate-banner2">

                    {/* Left - Image */}
                    <div className="flex items-center justify-center border-b-2 border-[#25211D] bg-[#D8CCB8] md:border-b-0 md:border-r-2">
                        <Image
                            src="/assets/tv1.png"
                            alt="Call Me"
                            width={650}
                            height={500}
                            priority
                            className="h-auto w-full object-contain"
                        />
                    </div>

                    {/* Right - Funny Text */}
                    <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

                        <p className="text-[9px] font-bold uppercase tracking-[4px] text-[#A94738]">
                            Breaking News
                        </p>

                        <h1 className="dm-serif-display mt-3 text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
                            You have
                            <br />
                            <span className="text-[#A94738]">
                                reached me.
                            </span>
                        </h1>

                        <div className="my-6 border-y border-[#BDB3A5] py-4">
                            <p className="text-sm leading-7 text-[#5A5147] sm:text-base">
                                Sources confirm that Shahariyar Ahad is
                                currently available for messages, calls,
                                collaborations, and random conversations
                                about almost anything.
                            </p>
                        </div>

                        <p className="dm-serif-display text-xl italic text-[#25211D] sm:text-2xl">
                            No appointment required.
                            <br />
                            Just say hello. ☕
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            <span className="h-2 w-2 bg-[#A94738]" />

                            <span className="text-[8px] font-bold uppercase tracking-[3px] text-[#7A7066]">
                                Contact Desk • Open Now
                            </span>
                        </div>
                    </div>
                </div>

                {/* Title */}
                <div className="border-b-2 border-[#25211D] py-8 text-center sm:py-10">
                    <p className="text-[9px] font-bold uppercase tracking-[4px] text-[#A94738]">
                        Let's Talk
                    </p>

                    <h2 className="dm-serif-display mt-2 text-4xl leading-tight sm:text-5xl lg:text-6xl text-white">
                        Get in Touch.
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-red-500">
                        Have a project, opportunity, or simply want to say hello?
                        Feel free to reach out through any of the channels below.
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
                    {contacts.map((contact) => (
                        <Link
                            key={contact.title}
                            href={contact.link}
                            target={
                                contact.link.startsWith("http")
                                    ? "_blank"
                                    : undefined
                            }
                            rel={
                                contact.link.startsWith("http")
                                    ? "noopener noreferrer"
                                    : undefined
                            }
                            className="group border-2 border-[#25211D] bg-[#F5F0E6] p-5 transition duration-300 hover:-translate-y-1 hover:bg-[#25211D] hover:text-[#F5F0E6]"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex h-10 w-10 items-center justify-center border border-[#25211D] text-[#A94738] transition group-hover:border-[#F5F0E6] group-hover:text-[#C89F65]">
                                    {contact.icon}
                                </div>

                                <span className="text-lg text-[#7A7066] transition group-hover:text-[#F5F0E6]">
                                    ↗
                                </span>
                            </div>

                            <div className="mt-6 border-t border-[#D8CCB8] pt-4 transition group-hover:border-[#5A5147]">
                                <p className="text-[8px] font-bold uppercase tracking-[3px] text-[#A94738]">
                                    {contact.title}
                                </p>

                                <p className="dm-serif-display mt-1 break-all text-xl">
                                    {contact.value}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Direct Contact */}
                <div className="border-y border-[#25211D] py-6 text-center">
                    <p className="text-[8px] font-bold uppercase tracking-[3px] text-[#7A7066]">
                        Available For
                    </p>

                    <p className="dm-serif-display mt-2 text-xl text-white sm:text-2xl">
                        Freelance • Collaboration • Opportunities
                    </p>
                </div>

                {/* Footer */}
                <div className="flex flex-col items-center justify-between gap-3 pt-5 text-center sm:flex-row sm:text-left">
                    <p className="text-[7px] font-bold uppercase tracking-[3px] text-[#8B8379]">
                        Shahariyar Ahad • Contact Desk
                    </p>

                    <p className="dm-serif-display text-sm italic text-[#A94738]">
                        Let's create something meaningful.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contacts;