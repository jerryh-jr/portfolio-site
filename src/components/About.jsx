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
            <div className="w-3/4 mx-auto">
                <h3>About me.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse </p>
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