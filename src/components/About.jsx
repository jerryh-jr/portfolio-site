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
            <div className="w-3/4 flex flex-col items-center justify-center bg-gray-300 p-8 rounded-lg drop-shadow-2xl text-gray-950">
                <h3 className="text-3xl">About me:</h3>
                <p className="pt-2">
                    Hey there! I’m a front-end developer passionate about crafting beautiful, responsive websites. Armed with HTML, CSS, JavaScript, and React,
                    I bring ideas to life on the web. I’m always learning and expanding my skills to stay ahead in this ever-evolving field.
                    Let’s team up and create something awesome together!
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