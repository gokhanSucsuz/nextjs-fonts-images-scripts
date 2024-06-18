"use client";
import React from 'react';
import Image from "next/image";
import lake from "../images/lake.jpeg";
import moto from "../images/moto.jpeg";
import blur from "../images/blur.jpg"

const ImageComp = () => {
    const imageLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`;
    };

    const imageError = () => {
        alert("Error: Image couldn't loaded.");
    };

    const scriptLoaded = e => { console.log("Script is loaded!") }
    return (
        <>
            <h1 className="text-6xl pb-5 text-center">Images</h1>
            <div className="flex flex-col gap-2">
                <div>Lazy Load Example</div>
                <Image
                    className="rounded-lg shadow-lg"
                    src={lake}
                    alt="lake"
                    quality={100}
                    placeholder="blur"
                    blurDataURL={blur.src}
                    width={400}
                    height={400}
                    loading="lazy"
                    style={{
                        height: "auto",
                        width: "auto"
                    }}
                />
                <div>Eager Load Example</div>
                <Image
                    className="rounded-lg shadow-lg"
                    loader={imageLoader}
                    src={moto.src}
                    alt="moto"
                    onError={imageError}
                    width={400}
                    height={400}
                    placeholder="blur"
                    loading="eager"
                    blurDataURL={blur.src}
                    style={{
                        height: "auto",
                        width: "auto"
                    }}
                />
            </div>
        </>

    );
};

export default ImageComp;
