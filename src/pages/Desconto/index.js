import React,{useEffect} from 'react';
import Depoimentos from './depoimentos';
import ReactPlayer from 'react-player';
import './style.css';
import imgOne from "../../assets/img/1img.png";
import imgTwo from "../../assets/img/2img.png";
import imgThree from "../../assets/img/3img.png";
import bonus from "../../assets/img/bonus.png";
import selo from "../../assets/img/selo.png";

function Desconto(){
    function openInNewTab(url) {
        window.open(url, '_blank').focus();
       }

    function startTimer(duration, display) {
        let timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
  
useEffect(()=>{
    const duration = 60*15; // Converter para segundos
        const display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
  
},[]);
return (

     <div className='container-dep'>
         <div className='content-dep'>
             <div className='header-desc'>
                 <h1>Espera ai, você acaba de ganhar 40% de desconto no método!</h1>
                 <h1 className='oferta'>Esse desconto acaba em:</h1>
             </div>
             <div id='timer'></div>
         
         {Depoimentos.map((dep,id) => {
             return(
        <div className='postagens'>
        <div className='postagens-name'>Depoimento de: {dep.nome}</div>
        <div className='postagens-video'><ReactPlayer url={dep.video} width="100%" height="100%" controls={false}/></div>
            </div>
             );
         })}
          <div className='button-create'>
             <h1 className='desconto-title'>Garanta seu desconto de <span className='text-desc'>De R$ 147,00 por apenas 12x R$ 9,74</span></h1>
         </div>
           <button onClick={() => openInNewTab('https://pay.hotmart.com/C70363347R?off=rnsce9yj&checkoutMode=10&bid=1654350158074')} className='button-desc'>CLIQUE AQUI PARA GARANTIR O SEU DESCONTO</button>
        <div className='slides'>
            <div className='content-header-top'><h1>(+) Depoimentos</h1></div>
       <img className="slides-img" src={imgOne}/>
       <img className="slides-img" src={imgTwo}/>
       <img className="slides-img" src={imgThree}/>
        </div>

         <div className='button-create'>
             <h1 className='desconto-title'>Garanta seu desconto de <span className='text-desc'>De R$ 147,00 por apenas 12x R$ 9,74</span></h1>
         </div>
           <button onClick={() => openInNewTab('https://pay.hotmart.com/C70363347R?off=rnsce9yj&checkoutMode=10&bid=1654350158074')} className='button-desc'>CLIQUE AQUI PARA GARANTIR O SEU DESCONTO</button>
         <img src={bonus} className="id-image"/>
         <div className='garantia'>
             <img className='selo-garantia' src={selo}/>
             <h1 className='selo-text'>Você não terá nenhum risco, pois você tem garantia de 7 dias caso não goste do produto!</h1>
         </div>
         </div>
     </div>

);
}
export default Desconto;
