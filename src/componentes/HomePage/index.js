import React from 'react';
import './style.css';
import eletricista from './imgs/eletricista-instalador.jpg';
import excel from './imgs/excel-basico.png';
import inspetorQualidade from './imgs/inspetor-de-qualidade.jpg';
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
</style>

function HomePage(){
    return(
        <main>
            <div id='eletricista' class='card'>
                <h4>ELETRICISTA INSTALADOR</h4>
                <img src={eletricista} class='homeImgs' alt='Imagem ilustrativa de um eltricista'></img>
                <p>CARGA HORÁRIA: 160 horas</p>
                <p>VALOR TOTAL: R$ 2.070,00</p>
                <p>PARCELAS: Até 8 de R$ 258,75</p>
            </div>
            <div id='excel' class='card'>
                <h4>EXCEL BÁSICO</h4>
                <img src={excel} class='homeImgs' class='homeImgs' alt='Logo do Excel'></img>
                <p>CARGA HORÁRIA: 20 horas</p>
                <p>VALOR: Gratuito</p>
            </div>
            <div id='inspetorQualidade' class='card'>
                <h4>INSPETOR DE QUALIDADE</h4>
                <img src={inspetorQualidade} class='homeImgs' alt='Imagem ilutrastiva de um inspetor de qualidade'></img>
                <p>CARGA HORÁRIA: 160 horas</p>
                <p>VALOR: Gratuito</p>
            </div>
        </main>
    );
}

export default HomePage;