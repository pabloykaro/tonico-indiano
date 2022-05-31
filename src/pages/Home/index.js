import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css";
function Home({props,statusOne}){
    const [ButtonO, setButtonO] = useState(false);
    const [ButtonS, setButtonS] = useState(false);
const navigate = useNavigate();


const dados = [
   ["Eliminar peso urgente?"],
   ["Perder entre 10 a 30kg?"],
];

function MoveVideo(){
    setTimeout(() => {
        navigate("/video");
    }, 100);
    
}
function Dados(){
    if(ButtonO===false && ButtonS===false){
      return  dados[0];
    }else if(ButtonS===true && ButtonO===true){
       return dados[1]
    }else{
        return dados[1];
    }
}
useEffect(()=>{
   
    if(ButtonS===true){
        MoveVideo();
    }
},[ButtonS]);


 return (
     <div className="container">
        <div className="button-content">
            <div className="top-text">
                Tudo pronto!, o que você precisa ?
            </div>
            <div className="center-text">
             
            <div className='header-post'>{Dados()}</div>
           
               {ButtonO===false ? 
                <>
                <button onClick={() => setButtonO(true)}  className="button-enter">SIM</button>
                <button onClick={() => setButtonO(true)}  className="button-enter-red">NÃO</button>
                </> :
                 <>
                <button onClick={() => setButtonS(true)}  className="button-enter">SIM</button>
                <button onClick={() => setButtonS(true)}  className="button-enter-red">NÃO</button>
                </>
                }
           

       

            </div>
        
        </div>
       
     </div>
 );
}



export default Home;