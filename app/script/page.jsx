"use client"
import React from 'react'
import Script from "next/script";

const ScriptFile = () => {
    const handleLoad = () => {
        console.log("Script loaded successfully!");
    };

    const handleReady = () => {
        console.log("Script is ready to be executed!");
    };

    const handleError = (error) => {
        console.error("Script failed to load:", error);
    };
    return (
        <div className="p-2 gap-3 flex flex-col shadow-lg">
            <h1 id="hello">Here is done by local nextjs Script tag (with lazyOnLoad)</h1>
            <Script id="hello_script" strategy="lazyOnload">
                document.getElementById("hello").classList.add("bg-red-500","text-white","p-4","rounded-lg")
            </Script>
            <h1 id="hello2">Here is done by local nextjs Script tag (with beforeInteractive)</h1>
            <Script id="hello_script2" strategy="beforeInteractive" >
                document.getElementById("hello2").classList.add("bg-purple-500","text-white","p-4","rounded-lg")
            </Script>
            <h1 id="hello3">Here is done by local nextjs Script tag (with afterInteractive)</h1>
            <Script id="hello_script3" strategy="afterInteractive">
                document.getElementById("hello3").classList.add("bg-cyan-500","text-white","p-4","rounded-lg")
            </Script>
            <h1>Bootstrap Script File</h1>
            <Script id="bootstrap5_script" strategy='beforeInteractive'
                onError={handleError}
                onReady={handleReady}
                onLoad={handleLoad}
            />
        </div>

    )
}

export default ScriptFile