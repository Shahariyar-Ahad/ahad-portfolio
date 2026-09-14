import React from 'react';

const Loading = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#F5F0E6]">
            <div className="text-center">

                <div className="dm-serif-display text-5xl text-[#25211D]">
                    Ahad
                </div>

                <div className="mx-auto mt-3 h-px w-20 bg-[#A94738]" />

                <p className="mt-3 text-[10px] font-bold uppercase tracking-[3px] text-[#5A5147]">
                    Loading...
                </p>

            </div>
        </div>
    );
};

export default Loading;