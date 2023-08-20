"use client";

import Image from "next/image";


function AboutImage() {
    return (
        <Image
            alt={`me`}
            src={`/images/other/me.jpg`}
            width={200}
            height={300}
        />
    );
}

export default AboutImage;