import React from 'react';

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center h-screen v-full bg-hero-image bg-right-bottom bg-cover bg-transparent">
            <h1 className="text-4xl lg:text-8xl font-bold shadow-white drop-shadow-2xl">Hello, I am <span className="text-yellow-300">Jerry</span></h1>
            <h3 className="text-2xl lg:text-4xl">Frontend Web Developer.</h3>
        </section>
    )
};