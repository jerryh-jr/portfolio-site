import React from 'react';

export default function Hero() {
    return (
        <section className="flex-col justify-items-center content-center h-screen v-full bg-hero-image bg-right-bottom bg-cover bg-transparent ">
            <h1 className="text-5xl lg:text-8xl font-bold shadow-white drop-shadow-2xl">Hello, I am <span className="text-yellow-300">Jerry</span>.</h1>
            <h3 className="text-3xl lg:text-4xl">Frontend Web Developer.</h3>
        </section>
    )
};