import React from 'react';
import { NavLink } from 'react-router-dom';
import './../style/home.css'

const Home = () => {
    return (
        <div className='home'>
            <nav>
                <NavLink to="/">
                    <h2 className='logo'>
                        <span className='bleu'>J</span>
                        <span className='violet'>P</span>
                        <span className='bleu2'>A</span> student
                    </h2>
                </NavLink>

                <span></span>
                <NavLink to="/about">About</NavLink>
            </nav>
            <main>
                <h3>
                    <span className='bleu'>Bien</span>
                    <span className='violet'>ve</span>
                    <span className='bleu2'>nue</span>
                </h3>
                <p>
                    Notre Application sert à gerer les étudiants d'un établissement;
                    c'est à dire enregistrer, mettre à jour, supprimer et afficher les
                    information sur des étudiants
                </p>
                <NavLink to="/etudiant">
                    <span className='button'>
                        Étudiant
                    </span>
                </NavLink>
            </main>
        </div>
    );
};

export default Home;