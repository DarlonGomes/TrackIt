import styled from 'styled-components';
import "../assets/reset.css"
import logotipo from '../assets/logotipo.png';
import {useState} from 'react';
import { Link } from 'react-router-dom';
export default function Login (){
    const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
    return (
        <Page>
            <img src={logotipo} alt="Logo Trackit" />
            <form>
            <input
            type="email"
            value={email}
            onChange={e=> setEmail(e.target.value)}
            placeholder= "email"
            required
            ></input>
            <input
            type="password"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            placeholder= "senha"
            required
            ></input>
            <button>Entrar</button>
            </form>
            <Link to="/cadastro" >
            <p>Não tem uma conta? Cadastre-se!</p>
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

