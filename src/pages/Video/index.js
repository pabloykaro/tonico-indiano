import React,{useState,useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {Comments,CommentsNews} from '../../comments';
import "./style.css";
import logoImg from "../../assets/img/logoname.png";


function Video(){

    const [dados,setDados] = useState(Comments);
    const [statustwo,setStatusTwo] = useState(false);

    function openInNewTab(url) {
        window.open(url, '_blank').focus();
       }
    
useEffect(()=>{

    function getRandomIntInclusive(num) {
        return Math.floor(Math.random() * num);
      }

    setTimeout(()=> setDados([CommentsNews[getRandomIntInclusive(2)],...Comments]),5000);
    setTimeout(()=> setStatusTwo(true),720000);

    (function() {
        window.history.replaceState(null, document.title, "/desconto");
        window.history.pushState(null, document.title, "/video");
        }());
  
},[]);


    return (
        
        <div className="container">
        <div className="header">
            <img className="logo" src={logoImg}/>
        </div>
    
        <embed className="video" src="https://scripts.converteai.net/7d8c4433-2daa-401f-86a4-79e2544ff13d/players/627f2c95cedd96000aa28d83/embed.html"/>
       <h1 className='legend'>Verifique se o seu áudio está ligado!!!</h1>
 
                    <div className="comentarios">
                    { dados.map((item,id) => {
                   return (
                    <>
                    <div className="content">
                    <div className="content-header-comments">
                    <img className="img-comments" key={id} src={item.foto} width={50} height={50}/>  
                    </div>
                    <div className="content-flex">
                    <div className="comment-name">{ item.name }</div>
                    <div className="comment-content">{ item.comment }</div>
                <div className="comment-type">{item.hora=="Agora" ? `Comentado ${item.hora}` : `Comentado há ${item.hora}` }</div>
                    
                    </div>
                    
                    </div>

                    
                    </>
                   ); 
                    
                        }) }
                    </div>
                        
        <div>
   	
    </div>
        </div>
                  
 
    );

                      
                 
}
export default Video;