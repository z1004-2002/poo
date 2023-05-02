import React from 'react';
import './../style/about.css'
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div className='about'>
            <nav>
                <NavLink to="/">
                    <h2 className='logo'>
                        <span className='bleu'>J</span>
                        <span className='violet'>P</span>
                        <span className='bleu2'>A</span> student
                    </h2>
                </NavLink>
                <NavLink to="/etudiant">Etudiant</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
            <main>
                <p>
                    <h3>À Propos de nous</h3>
                    Les personnes dont le nom suit ont participé au travail sur cet exposé
                    <ul>
                        <li>KWABOU NELDA</li>
                        <li>ZOGNING ABEL</li>
                        <li>TAPAMO DIMITRI</li>
                        <li>ASSONZEU DELSON</li>
                        <li>ONGUENE YVAN</li>
                        <li>MBANGONO RAPHAËLLE</li>
                        <li>HIOBA SAMUEL</li>
                        <li>TEBEU YVANNA</li>
                    </ul>
                </p>
            </main>
        </div>
    );
};

export default About;