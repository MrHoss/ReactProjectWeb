import React, {useState} from "react";
import './styles/Login.css';

export default (props) => {
    const [setName] = useState({...props.name})
    return(
        <div className="LoginForm" >
            <h1 className="TitleLogin">Bem vindo!</h1>
            <input className="InputLogin" placeholder="Nome de usuário ou Email" type="text" value={null} onChange={e => setName(e.target.value)} />
            <input  className="InputLogin" placeholder="**********" type="password" value={null} onChange={e => setName(e.target.value)} />
            <button className="BtnLogin">Entrar</button>
        </div>
        
    );
};