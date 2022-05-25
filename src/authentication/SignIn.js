import styled from 'styled-components';
import "../assets/reset.css"
import logotipo from '../assets/logotipo.png';
import {useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
export default function SignIn () {
    const navigate = useNavigate();
    const [registerEmail, setRegisterEmail] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
    const [registerName, setRegisterName] = useState("");
	const [registerImage, setRegisterImage] = useState("");
    const [registerData, setRegisterData] = useState(null)
    
    function register(event, registerEmail, registerPassword, registerName, registerImage){
        event.preventDefault();
        setRegisterData({
           email: registerEmail,
           name: registerName, 
           image: registerImage,
           password: registerPassword
        })

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', registerData)
                 promise.then(response => navigate("/"));
                promise.catch(()=>{
                    alert("Já existe uma conta cadastrada com esse e-mail.");
                    setRegisterEmail("");
                    setRegisterPassword("");
                    setRegisterName("");
                    setRegisterImage("");
                })

    }

    return (
          <Page>
            <img src={logotipo} alt="Logo Trackit" />
            <form onSubmit={(event)=>register(event, registerEmail, registerPassword, registerName, registerImage)}>
            <input
            type="email"
            value={registerEmail}
            onChange={e=> setRegisterEmail(e.target.value)}
            placeholder= "email"
            required
            ></input>
            <input
            type="password"
            value={registerPassword}
            onChange={e => setRegisterPassword(e.target.value)}
            placeholder= "senha"
            required
            ></input>
            <input
            type="text"
            value={registerName}
            onChange={e=> setRegisterName(e.target.value)}
            placeholder= "nome"
            required
            ></input>
            <input
            type="text"
            value={registerImage}
            onChange={e => setRegisterImage(e.target.value)}
            placeholder= "foto"
            required
            ></input>
            <button type="submit">Cadastrar</button>
            </form>
            <Link to="/" >
            <p>Já tem uma conta? Faça login!</p>
            </Link>
            

        </Page>
    )
}

const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    
    form{
        width: 310px;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 19.976px;
        color: #DBDBDB;
    }
    img{
        width: 180px;
        height: 178px;
        margin: 68px 0px 32px;
    }
    input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;
        box-sizing: border-box;
        padding: 0 10px;
    }

    button{
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border: none;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 20.976px;
        color: #FFFFFF;
    }

    p{
        font-family: 'Lexend Deca';
        font-weight: 400;
        text-decoration-line: underline;
        color: #52B6FF;
        margin-top: 25px;
    }
`;