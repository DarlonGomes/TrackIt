import styled from 'styled-components';
import "../assets/reset.css"
import logotipo from '../assets/logotipo.png';
import {useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
export default function SignIn () {
    const navigate = useNavigate();
    const [registerEmail, setRegisterEmail] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
    const [registerName, setRegisterName] = useState("");
	const [registerImage, setRegisterImage] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);

    function toggleButton () {
        if(isDisabled === true){
            return (
                <>
                <button><ThreeDots  color="#FFFFFF" height={17} width={303} /></button>
                </>
            )
        }

        return(
            <button type="submit">Cadastrar</button>
        )
    }

    const Toggle = toggleButton();
    
    function register(event, registerEmail, registerPassword, registerName, registerImage){
        event.preventDefault();
        setIsDisabled(true)

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',{
            email: registerEmail,
            name: registerName, 
            image: registerImage,
            password: registerPassword
         })
                 promise.then((response) => {setIsDisabled(false);
                                            navigate("/")});
                promise.catch(()=>{
                    setIsDisabled(false);
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
            {Toggle}
            </form>
            <Link to="/" >
            <p>Já tem uma conta? Faça login!</p>
            </Link>
            

        </Page>
    )
}

const Page = styled.div`
    height: 85vh;
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
        background: ${(props) => props.isDisabled ? "#F2F2F2" : "#FFFFFF"};
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;
        box-sizing: border-box;
        padding: 0 10px;
        pointer-events: ${(props) => props.isDisabled ? "none" : "all"};
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
        pointer-events: ${(props) => props.isDisabled ? "none" : "all"};
    }

    p{
        font-family: 'Lexend Deca';
        font-weight: 400;
        text-decoration-line: underline;
        color: #52B6FF;
        margin-top: 25px;
    }
`;
