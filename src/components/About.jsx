import React from 'react';
import cssIcon from '../assets/css-3.svg';
import htmlIcon from '../assets/html-5.svg';
import javascriptIcon from '../assets/javascript.svg';
import reactIcon from '../assets/react.svg';
import vueIcon from '../assets/vue.svg';
import pythonIcon from '../assets/python.svg';
import pandasIcon from '../assets/pandas-icon.svg';
import numpyIcon from '../assets/numpy.svg';
import firebaseIcon from '../assets/firebase.svg';
import nodeIcon from '../assets/nodejs-icon-alt.svg';

export default function About() {
    return (
        <section className="grid grid-cols-2 place-items-center h-screen v-full">
            <div className="w-3/4 flex flex-col items-center justify-center">
                <h3 className="text-3xl">About me:</h3>
                <p className="pt-2">
                    Hey there! I’m a front-end developer with a passion for crafting beautiful, responsive websites.
                    Armed with HTML, CSS, JavaScript, and React, I turn ideas into interactive digital experiences.
                    I’m always eager to expand my skills and stay on top of the latest tech trends. When I’m not coding,
                    you’ll find me diving into online courses, experimenting with new frameworks, or tinkering with side projects to level up my abilities.
                    I’ve got the skills and certifications, but what really drives me is creating websites that are both functional and fun.
                    Whether you need a sleek portfolio or a quirky e-commerce site, I’m your go-to dev. Let’s build something awesome together!
                </p>
            </div>
            <div className="grid grid-cols-3 place-items-center gap-0 w-3/4 ">
                <img className="svg drop-shadow-md " src={javascriptIcon} alt="JavaScript Icon" />
                <img className="svg drop-shadow-md" src={htmlIcon} alt="html Icon" />
                <img className="svg drop-shadow-md" src={cssIcon} alt="Css Icon" />
                <img className="svg drop-shadow-md" src={reactIcon} alt="React Icon" />
                <img className="svg drop-shadow-md" src={vueIcon} alt="Vue Icon" />
                <img className="svg drop-shadow-md" src={pythonIcon} alt="Python Icon" />
                <img className="svg drop-shadow-md" src={pandasIcon} alt="Pandas Icon" />
                <img className="svg drop-shadow-md" src={numpyIcon} alt="NumPy Icon" />
                <img className="svg drop-shadow-md" src={firebaseIcon} alt="Firebase Icon" />
                <img className="svg drop-shadow-md colart-4" src={nodeIcon} alt="Node Icon"/>
            </div>
        </section>
    )
};