import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div>
            <Link href="/" className="flex items-center gap-2">
               <Image 
    alt="my-logo" 
    src="/assets/img1.png" 
    width={80} 
    height={80}
    className="rounded-4xl object-cover"
/>
                
            </Link>
        </div>
    );
};

export default Logo;