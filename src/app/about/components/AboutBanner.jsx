


import Image from "next/image";

const AboutBanner = () => {
    return (
        <section className="w-full border-y-2 border-[#25211D] bg-base-100">
            <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14 animate-banner1">

                {/* Newspaper Header */}
                <div className="border-y border-[#25211D] py-3 text-center">
                    <p className="text-xs font-bold uppercase tracking-[5px] text-[#f4f2f0]">
                        Personal Profile • About
                    </p>
                </div>

                {/* Main Content */}
                <div className="mt-8 grid items-center gap-10 lg:grid-cols-[380px_1fr] lg:gap-14">

                    {/* Photo */}
                    <div className="flex justify-center">
                        <div className="rounded-4xl border border-[#25211D] p-2">
                            <Image
                                src="/assets/jacket.png"
                                alt="Shahariyar Ahad"
                                width={500}
                                height={500}
                                priority
                                className="h-auto w-full max-w-[380px] object-contain md:h-[340px] md:w-[340px] lg:h-[360px] lg:w-[360px]"
                            />
                        </div>
                    </div>

                    {/* About */}
                    <div>
                        <div className="mb-3 flex items-center gap-3">
                            <span className="h-px flex-1 bg-[#25211D]" />

                            <span className="text-xs font-bold uppercase tracking-[3px] text-white">
                                About Me
                            </span>

                            <span className="h-px flex-1 bg-[#25211D]" />
                        </div>

                        <h2 className="caacupe-one-regular text-center text-6xl leading-none text-white md:text-7xl lg:text-8xl lg:text-left">
                            Shahariyar
                            <br />
                            <span className="text-[#A94738]">
                                Ahad
                            </span>
                        </h2>

                        <div className="my-6 border-y border-[#25211D] py-3">
                            <p className="dm-serif-display text-center text-lg italic text-white lg:text-left">
                                Full stack  Web Developer • Bangladesh
                            </p>
                        </div>

                        
<p className="dm-serif-display text-[18px] leading-[1.7] text-white md:text-[20px]">
    Hello, I’m{" "}
    <span className="font-bold text-[#d72525]">
        Shahariyar Ahad
    </span>
    , a Full-Stack MERN Developer currently based in{" "}
    <span className="font-bold text-white">
        Dhaka, Bangladesh
    </span>
    .
</p>



                        <p className="dm-serif-display mt-5 text-[18px] leading-[1.7] text-white md:text-[20px]">
                            I have worked on different web projects where I focused on both frontend development and backend functionality, including APIs, databases, authentication, and application logic. Beyond technology, I have an
                            interest in international politics, economics,
                            and global trade,war, movies and series.
                        </p>

                        {/* Bottom Newspaper Line */}
                        <div className="mt-7 flex items-center gap-3">
                            <span className="text-xs font-bold uppercase tracking-[2px] text-[#A94738]">
                                Portfolio Edition
                            </span>

                            <span className="h-px flex-1 bg-[#D8CCB8]" />
                        </div>
                    </div>
                </div>

                {/* Bottom Border */}
                <div className="mt-10 border-t-4 border-double border-[#25211D] pt-3">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-[3px] text-white">
                        <span>About</span>
                        <span>Dhaka, Bangladesh</span>
                        <span>2026</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutBanner;


