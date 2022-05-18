import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css";
function Home(){

const navigate = useNavigate();

function MoveVideo(){
    navigate("/video/home");
}

 return (
     <div className="container">
        <div className="button-content">

            <div className="top-text">
                TUDO PRONTO!!!
            </div>
            <div className="center-text">
                CLIQUE NO BOTÃO PARA CONTINUAR
                <button onClick={() => MoveVideo()} className="button-enter">CONTINUAR</button>

            </div>
        
        </div>
       
     </div>
 );
}
export default Home;