

import Image from "next/image";

const Banner = () => {
    return (
        <section className="w-full bg-base-100 px-3 py-4 sm:px-5">
            <div className="mx-auto max-w-[1310px]">

                {/* Newspaper Header */}
                <div className="mb-3 flex items-center justify-between border-y border-[#25211D] py-2">
                    <span className="text-[9px] font-bold uppercase tracking-[3px] text-[#5A5147] sm:text-[10px]">
                        The Portfolio
                    </span>

                    <span className="dm-serif-display text-sm italic text-[#A94738] sm:text-base">
                        The Daily Edition
                    </span>

                    <span className="text-[9px] font-bold uppercase tracking-[3px] text-[#5A5147] sm:text-[10px]">
                        2026
                    </span>
                </div>

                {/* Banner */}
                <div className="relative aspect-[1310/602] w-full overflow-hidden border-2 border-[#25211D]">

                    {/* LEFT HALF */}
                    <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
                        <Image
                            src="/assets/finally-split0.png"
                            alt="My banner left"
                            fill
                            priority
                            sizes="50vw"
                            className="object-cover object-right animate-banner"
                        />
                    </div>

                    {/* RIGHT HALF */}
                    <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
                        <Image
                            src="/assets/finally-split1.png"
                            alt="My banner right"
                            fill
                            priority
                            sizes="50vw"
                            className="object-cover object-left animate-banner1"
                        />
                    </div>
                </div>

                {/* Newspaper Footer */}
                <div className="mt-3 flex items-center gap-3 border-b-2 border-[#25211D] pb-2">
                    <span className="h-px flex-1 bg-[#D8CCB8]" />

                    <span className="dm-serif-display text-xs italic text-[#5A5147] sm:text-sm">
                        Design • Technology • Creativity
                    </span>

                    <span className="h-px flex-1 bg-[#D8CCB8]" />
                </div>

            </div>
        </section>
    );
};

export default Banner;