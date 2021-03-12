import React from 'react';
import logoSenai from './Img/logo-senai2.png';
import './style.css'

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap');
</style>

function Header(){
    return(
        <header>
            <img src={logoSenai} id='logo' alt='logo do SENAI'></img>
            <div id='title'>
                <h2 id="local">SÃO PAULO - SANTO AMARO</h2>
                <h1 id="titulo">SUÍÇO-BRASILEIRA PAULO ERNESTO TOLLE</h1>
            </div>
        </header>
    );
}
export default Header;