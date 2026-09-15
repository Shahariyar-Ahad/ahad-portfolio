
"use client";

import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import NavLink from "../buttons/NavLink";

const Navbar = () => {
    const [musicOpen, setMusicOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(0);

    const audioRef = useRef(null);

    const songs = [
    {
        title: "Allah Ke Bande",
        artist: "Kailash Kher",
        src: "/music/Allah Ke Bande ｜ Waisa Bhi Hota Hai - II (2003) ｜ Arshad Warsi ｜ Kailash Kher ｜ Superhit Song.mp3",
    },
    {
        title: "Sherazam - Safar",
        artist: "Bayaan",
        src: "/music/Bayaan ｜ Sherazam - Safar.mp3",
    },
    {
        title: "November Rain",
        artist: "Guns N' Roses",
        src: "/music/Guns N' Roses - November Rain (2022 Version).mp3",
    },
    {
        title: "Proshno",
        artist: "Hasan",
        src: "/music/Hasan ｜ Proshno ｜ প্রশ্ন ｜ হাসান ｜ Official Music Video ｜ Soundtek.mp3",
    },
    {
        title: "Someday",
        artist: "OneRepublic",
        src: "/music/OneRepublic - Someday (Official Music Video).mp3",
    },
    {
        title: "Shararat",
        artist: "Shashwat S, Jasmine, Madhubanti",
        src: "/music/Shararat - 8K Video ｜ Dhurandhar ｜ Ranveer Singh, Shashwat S, Jasmine, Madhubanti, Ayesha, Krystle.mp3",
    },
    {
        title: "Talking To Myself",
        artist: "Linkin Park",
        src: "/music/Talking To Myself [Official Music Video] - Linkin Park.mp3",
    },
    {
        title: "Tor Premete Ondho Holam",
        artist: "James",
        src: "/music/Tor Premete Ondho Holam (তোর প্রেমেতে অন্ধ হলাম) Lyrics - James ｜ James song all ｜ Shotta Movie Song.mp3",
    },
    {
        title: "Tu Hi Mera",
        artist: "Shafqat Amanat Ali",
        src: "/music/Tu Hi Mera - Full Video ｜ Emraan Hashmi, Esha Gupta ｜ Jannat 2 ｜ Shafqat Amanat Ali ｜ Pritam.mp3",
    },
    {
        title: "Rup Kotha",
        artist: "Warfaze",
        src: "/music/Warfaze-Rupkotha.mp3",
    },
];

    // ================= NAVIGATION =================

    const nav = (
        <>
            <li>
                <NavLink href="/">
                    <span className="italic">1.</span> Home
                </NavLink>
            </li>

            <li>
                <NavLink href="/about">
                    <span className="italic">2.</span> About
                </NavLink>
            </li>

            <li>
                <NavLink href="/skills">
                    <span className="italic">3.</span> Skills
                </NavLink>
            </li>

            <li>
                <NavLink href="/contact">
                    <span className="italic">4.</span> Contact
                </NavLink>
            </li>
        </>
    );

    // ================= PLAY / PAUSE =================

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    // ================= CHANGE SONG =================

    const changeSong = (index) => {
        setCurrentSong(index);
        setIsPlaying(true);

        setTimeout(() => {
            if (audioRef.current) {
                audioRef.current.play();
            }
        }, 100);
    };

    // ================= NEXT =================

    const nextSong = () => {
        const next = (currentSong + 1) % songs.length;
        changeSong(next);
    };

    // ================= PREVIOUS =================

    const previousSong = () => {
        const previous =
            currentSong === 0
                ? songs.length - 1
                : currentSong - 1;

        changeSong(previous);
    };

    // ================= AUTO NEXT =================

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) return;

        const handleEnded = () => {
            const next = (currentSong + 1) % songs.length;

            setCurrentSong(next);

            setTimeout(() => {
                if (audioRef.current) {
                    audioRef.current.play();
                    setIsPlaying(true);
                }
            }, 100);
        };

        audio.addEventListener("ended", handleEnded);

        return () => {
            audio.removeEventListener("ended", handleEnded);
        };
    }, [currentSong, songs.length]);

    return (
        <div className="w-full border-b border-[#34312D] bg-[#0D0D0D]">

            <div className="mx-auto flex h-[90px] max-w-7xl items-center px-4 sm:px-6 lg:px-8">

                {/* ================= LOGO ================= */}

                <div className="flex flex-1 items-center justify-center">

                    <div className="text-center">

                        <p className="mb-1 text-[10px] uppercase tracking-[0.35em] text-[#8E8982]">
                            Est. 2026
                        </p>

                        <div className="flex items-center gap-3">

                            <span className="h-px w-10 bg-[#403A34]" />

                            <h3
                                className="
                                    unifrakturcook-bold
                                    whitespace-nowrap
                                    text-2xl
                                    text-[#F1EEE8]
                                    md:text-2xl
                                "
                            >
                                Shahariyar Ahad
                            </h3>

                            <span className="h-px w-10 bg-[#403A34]" />

                        </div>

                        <p
                            className="
                                mt-2
                                text-[9px]
                                uppercase
                                tracking-[0.45em]
                                text-[#8E8982]
                            "
                        >
                            Web Designer • Developer
                        </p>

                    </div>

                </div>

                {/* ================= DESKTOP NAV ================= */}

                <nav className="hidden lg:flex">

                    <ul
                        className="
                            dm-serif-display
                            flex
                            items-center
                            gap-6
                            text-xl
                            font-bold
                            text-[#F1EEE8]
                        "
                    >
                        {nav}
                    </ul>

                </nav>

                {/* ================= DESKTOP RIGHT ================= */}

                <div
                    className="
                        hidden
                        flex-1
                        items-center
                        justify-end
                        gap-5
                        lg:flex
                    "
                >

                    {/* ================= MUSIC ================= */}

                    <div className="relative">

                        <button
                            onClick={() => setMusicOpen(!musicOpen)}
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-[#403A34]
                                bg-[#24211E]
                                px-4
                                py-2
                                text-sm
                                text-[#F1EEE8]
                                transition
                                duration-300
                                hover:border-[#A94738]
                                hover:bg-[#2B2723]
                            "
                        >

                            <span
                                className={
                                    isPlaying
                                        ? "animate-pulse text-lg text-[#A94738]"
                                        : "text-lg text-[#F1EEE8]"
                                }
                            >
                                ♪
                            </span>

                            <span>Music</span>

                            <span className="text-xs text-[#8E8982]">
                                {musicOpen ? "▲" : "▼"}
                            </span>

                        </button>

                        {/* ================= MUSIC PLAYER ================= */}

                        {musicOpen && (
                            <div
                                className="
                                    absolute
                                    right-0
                                    top-14
                                    z-[100]
                                    w-[320px]
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-[#403A34]
                                    bg-[#181715]
                                    shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                                "
                            >

                                {/* HEADER */}

                                <div className="border-b border-[#34312D] px-5 py-4">

                                    <div className="flex items-center justify-between">

                                        <div>

                                            <p className="text-xs uppercase tracking-[3px] text-[#77716A]">
                                                Now Playing
                                            </p>

                                            <h3 className="mt-1 text-sm font-semibold text-[#F1EEE8]">
                                                {songs[currentSong].title}
                                            </h3>

                                        </div>

                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#24211E]">

                                            <span
                                                className={
                                                    isPlaying
                                                        ? "animate-spin text-xl text-[#A94738]"
                                                        : "text-xl text-[#F1EEE8]"
                                                }
                                            >
                                                ♪
                                            </span>

                                        </div>

                                    </div>

                                </div>

                                {/* CONTROLS */}

                                <div className="px-5 py-5">

                                    <div className="flex items-center justify-center gap-5">

                                        {/* Previous */}

                                        <button
                                            onClick={previousSong}
                                            className="
                                                flex
                                                h-9
                                                w-9
                                                items-center
                                                justify-center
                                                rounded-full
                                                text-[#B8B2AA]
                                                transition
                                                hover:bg-[#24211E]
                                                hover:text-[#F1EEE8]
                                            "
                                        >
                                            ⏮
                                        </button>

                                        {/* Play */}

                                        <button
                                            onClick={togglePlay}
                                            className="
                                                flex
                                                h-12
                                                w-12
                                                items-center
                                                justify-center
                                                rounded-full
                                                bg-[#F1EEE8]
                                                text-[#0D0D0D]
                                                transition
                                                hover:scale-105
                                                hover:bg-[#A94738]
                                                hover:text-white
                                            "
                                        >
                                            {isPlaying ? "Ⅱ" : "▶"}
                                        </button>

                                        {/* Next */}

                                        <button
                                            onClick={nextSong}
                                            className="
                                                flex
                                                h-9
                                                w-9
                                                items-center
                                                justify-center
                                                rounded-full
                                                text-[#B8B2AA]
                                                transition
                                                hover:bg-[#24211E]
                                                hover:text-[#F1EEE8]
                                            "
                                        >
                                            ⏭
                                        </button>

                                    </div>

                                </div>

                                {/* PLAYLIST */}

                                <div className="border-t border-[#34312D]">

                                    <div className="px-5 py-3">

                                        <p className="text-xs uppercase tracking-[2px] text-[#77716A]">
                                            Playlist
                                        </p>

                                    </div>

                                    <div className="max-h-[220px] overflow-y-auto">

                                        {songs.map((song, index) => (
                                            <button
                                                key={index}
                                                onClick={() => changeSong(index)}
                                                className={`
                                                    flex
                                                    w-full
                                                    items-center
                                                    gap-3
                                                    px-5
                                                    py-3
                                                    text-left
                                                    transition
                                                    ${
                                                        currentSong === index
                                                            ? "bg-[#24211E] text-[#F1EEE8]"
                                                            : "text-[#8E8982] hover:bg-[#211F1C] hover:text-[#F1EEE8]"
                                                    }
                                                `}
                                            >

                                                <span
                                                    className={`w-5 text-xs ${
                                                        currentSong === index &&
                                                        isPlaying
                                                            ? "text-[#A94738]"
                                                            : ""
                                                    }`}
                                                >
                                                    {currentSong === index &&
                                                    isPlaying
                                                        ? "♫"
                                                        : index + 1}
                                                </span>

                                                <div className="flex-1">

                                                    <p className="text-sm">
                                                        {song.title}
                                                    </p>

                                                    <p className="text-xs text-[#66615B]">
                                                        {song.artist}
                                                    </p>

                                                </div>

                                            </button>
                                        ))}

                                    </div>

                                </div>

                            </div>
                        )}

                    </div>

                    {/* ================= SOCIAL LINKS ================= */}

                    {/* X */}

                    <a
                        href="https://x.com/iam_ahad_2003"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl text-[#F1EEE8] transition hover:text-[#A94738]"
                    >
                        𝕏
                    </a>

                    {/* LinkedIn */}

                    <a
                        href="https://www.linkedin.com/in/shahariyar-ahad/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold text-[#F1EEE8] transition hover:text-[#A94738]"
                    >
                        in
                    </a>

                    {/* Facebook */}

                    <a
                        href="https://www.facebook.com/profile.php?id=61593745201648"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-bold text-[#F1EEE8] transition hover:text-[#A94738]"
                    >
                        f
                    </a>

                    {/* Instagram */}

                    <a
                        href="https://www.instagram.com/slim_shady9743/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl text-[#F1EEE8] transition hover:text-[#A94738]"
                    >
                        ◎
                    </a>

                </div>

                {/* ================= MOBILE MENU ================= */}

                <div className="dropdown dropdown-end lg:hidden">

                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost text-[#F1EEE8] hover:bg-[#24211E]"
                    >

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >

                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />

                        </svg>

                    </div>

                    <ul
                        tabIndex={0}
                        className="
                            menu
                            menu-sm
                            dropdown-content
                            z-[100]
                            mt-3
                            w-[280px]
                            max-w-[calc(100vw-2rem)]
                            rounded-xl
                            border
                            border-[#403A34]
                            !bg-[#181715]
                            p-3
                            shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                        "
                    >

                        {/* NAVIGATION */}

                        {nav}

                        {/* DIVIDER */}

                        <li className="my-2 border-t border-[#34312D]" />

                        {/* ================= MOBILE MUSIC ================= */}

                       
{/* ================= MOBILE MUSIC ================= */}


{/* ================= MOBILE MUSIC ================= */}

<li className="!block !w-full">

    {/* ================= MUSIC HEADER ================= */}

    <button
        onClick={(e) => {
            e.preventDefault();
            setMusicOpen(!musicOpen);
        }}
        className="
            !flex
            !w-full
            !items-center
            !justify-between
            rounded-xl
            px-3
            py-3
            !text-[#F1EEE8]
            transition
            hover:bg-[#24211E]
        "
    >

        <span className="flex items-center gap-2">

            <span
                className={
                    isPlaying
                        ? "animate-pulse text-lg text-[#A94738]"
                        : "text-lg text-[#F1EEE8]"
                }
            >
                ♪
            </span>

            <span className="text-sm">
                Music
            </span>

        </span>

        <span className="text-xs text-[#8E8982]">
            {musicOpen ? "▲" : "▼"}
        </span>

    </button>


    {/* ===================================================== */}
    {/* ================= MUSIC CONTENT ===================== */}
    {/* ===================================================== */}

    {musicOpen && (

        <div className="mt-2 !block !w-full">


            {/* ================================================= */}
            {/* ================= MUSIC PLAYER ================== */}
            {/* ================================================= */}

            <div
                className="
                    !block
                    !w-full
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#403A34]
                    bg-[#181715]
                "
            >

                {/* ================= NOW PLAYING ================= */}

                <div className="border-b border-[#34312D] px-4 py-4">

                    <p
                        className="
                            text-[10px]
                            uppercase
                            tracking-[2px]
                            text-[#77716A]
                        "
                    >
                        Now Playing
                    </p>


                    <div className="mt-2 flex items-center justify-between gap-3">

                        {/* SONG INFO */}

                        <div className="min-w-0 flex-1">

                            <p className="truncate text-sm font-semibold text-[#F1EEE8]">
                                {songs[currentSong].title}
                            </p>

                            <p className="mt-1 truncate text-xs text-[#8E8982]">
                                {songs[currentSong].artist}
                            </p>

                        </div>


                        {/* MUSIC ICON */}

                        <div
                            className="
                                flex
                                h-11
                                w-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-[#24211E]
                            "
                        >

                            <span
                                className={
                                    isPlaying
                                        ? "animate-spin text-xl text-[#A94738]"
                                        : "text-xl text-[#F1EEE8]"
                                }
                            >
                                ♪
                            </span>

                        </div>

                    </div>

                </div>


                {/* ================= CONTROLS ================= */}

                <div className="px-4 py-5">

                    <div className="flex items-center justify-center gap-7">

                        {/* PREVIOUS */}

                        <button
                            onClick={previousSong}
                            aria-label="Previous song"
                            className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-full
                                text-lg
                                text-[#B8B2AA]
                                transition
                                hover:bg-[#24211E]
                                hover:text-[#F1EEE8]
                            "
                        >
                            ⏮
                        </button>


                        {/* PLAY / PAUSE */}

                        <button
                            onClick={togglePlay}
                            aria-label={isPlaying ? "Pause" : "Play"}
                            className="
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-full
                                bg-[#F1EEE8]
                                text-[#0D0D0D]
                                transition
                                hover:scale-105
                                hover:bg-[#A94738]
                                hover:text-white
                            "
                        >
                            {isPlaying ? "Ⅱ" : "▶"}
                        </button>


                        {/* NEXT */}

                        <button
                            onClick={nextSong}
                            aria-label="Next song"
                            className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-full
                                text-lg
                                text-[#B8B2AA]
                                transition
                                hover:bg-[#24211E]
                                hover:text-[#F1EEE8]
                            "
                        >
                            ⏭
                        </button>

                    </div>

                </div>

            </div>


            {/* ================================================= */}
            {/* ================= PLAYLIST ====================== */}
            {/* ================================================= */}

            <div
                className="
                    !mt-2
                    !block
                    !w-full
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#403A34]
                    bg-[#181715]
                "
            >

                {/* ================= PLAYLIST HEADER ================= */}

                <div
                    className="
                        !block
                        !w-full
                        border-b
                        border-[#34312D]
                        px-4
                        py-3
                    "
                >

                    <p
                        className="
                            text-[10px]
                            uppercase
                            tracking-[2px]
                            text-[#77716A]
                        "
                    >
                        Playlist
                    </p>

                </div>


                {/* ================= SONG LIST ================= */}

                <div
                    className="
                        !block
                        !w-full
                        max-h-[250px]
                        overflow-y-auto
                    "
                >

                    {songs.map((song, index) => (

                        <button
                            key={index}
                            onClick={() => changeSong(index)}
                            className={`
                                !flex
                                !w-full
                                !max-w-full
                                !items-center
                                gap-3
                                px-4
                                py-3
                                text-left
                                transition
                                ${
                                    currentSong === index
                                        ? "bg-[#24211E] text-[#F1EEE8]"
                                        : "text-[#8E8982] hover:bg-[#211F1C] hover:text-[#F1EEE8]"
                                }
                            `}
                        >

                            {/* ================= SONG NUMBER ================= */}

                            <span
                                className={`
                                    flex
                                    w-6
                                    shrink-0
                                    items-center
                                    justify-center
                                    text-xs
                                    ${
                                        currentSong === index && isPlaying
                                            ? "text-[#A94738]"
                                            : "text-[#77716A]"
                                    }
                                `}
                            >

                                {currentSong === index && isPlaying
                                    ? "♫"
                                    : `${index + 1}.`
                                }

                            </span>


                            {/* ================= SONG INFO ================= */}

                            <div className="min-w-0 flex-1">

                                <p
                                    className={`
                                        truncate
                                        text-sm
                                        ${
                                            currentSong === index
                                                ? "font-medium text-[#F1EEE8]"
                                                : ""
                                        }
                                    `}
                                >
                                    {song.title}
                                </p>


                                <p className="mt-0.5 truncate text-[11px] text-[#66615B]">
                                    {song.artist}
                                </p>

                            </div>


                            {/* ================= PLAY ICON ================= */}

                            <span
                                className={`
                                    flex
                                    h-7
                                    w-7
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    text-xs
                                    ${
                                        currentSong === index && isPlaying
                                            ? "text-[#A94738]"
                                            : "text-[#77716A]"
                                    }
                                `}
                            >

                                {currentSong === index && isPlaying
                                    ? "Ⅱ"
                                    : "▶"
                                }

                            </span>

                        </button>

                    ))}

                </div>

            </div>

        </div>

    )}

</li>





                        {/* DIVIDER */}

                        <li className="my-2 border-t border-[#34312D]" />

                        {/* ================= MOBILE SOCIAL LINKS ================= */}

                        <li>

                            <div className="flex items-center justify-center gap-7 py-3">

                                {/* X */}

                                <a
                                    href="https://x.com/iam_ahad_2003"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl text-[#F1EEE8] transition hover:text-[#A94738]"
                                >
                                    𝕏
                                </a>

                                {/* LinkedIn */}

                                <a
                                    href="https://www.linkedin.com/in/shahariyar-ahad/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg font-bold text-[#F1EEE8] transition hover:text-[#A94738]"
                                >
                                    in
                                </a>

                                {/* Facebook */}

                                <a
                                    href="https://www.facebook.com/profile.php?id=61593745201648"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl font-bold text-[#F1EEE8] transition hover:text-[#A94738]"
                                >
                                    f
                                </a>

                                {/* Instagram */}

                                <a
                                    href="https://www.instagram.com/slim_shady9743/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl text-[#F1EEE8] transition hover:text-[#A94738]"
                                >
                                    ◎
                                </a>

                            </div>

                        </li>

                    </ul>

                </div>

            </div>

            {/* ================= AUDIO ================= */}

            <audio
                ref={audioRef}
                src={songs[currentSong].src}
                preload="metadata"
            />

        </div>
    );
};

export default Navbar;

