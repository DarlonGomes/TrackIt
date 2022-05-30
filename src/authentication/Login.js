import styled from 'styled-components';
import axios from 'axios';
import logotipo from '../assets/logotipo.png';
import {useState, useEffect, useContext} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { UserContext } from '../context/UserContext';
export default function Login (){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const {setToken, setData} = useContext(UserContext);
    
    useEffect(()=>{
    if(localStorage.length !== 0)
            navigate("/hoje")
     }
    ,[])
    
    
    function validate(event, email, senha){
        event.preventDefault();
        setIsDisabled(true);
        const promise= axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', {
            email: email,
            password: senha
        });
            promise.then(response => {
                    localStorage.setItem("data", JSON.stringify(response.data))
                    setData(response.data);
                    setToken({headers:{
                        Authorization: `Bearer ${response.data.token}`
               }})
                navigate("/hoje")    
            });
            promise.catch(()=>{
                setEmail("");
                setSenha("");
                alert("As credenciais não são válidas.")
                setIsDisabled(false);
            })
    }
       
        function toggleButton () {
            if(isDisabled === true){
                return (
                    <>
                    <button><ThreeDots  color="#FFFFFF" height={17} width={303} /></button>
                    </>
                )
            }

            return(
                <button type="submit">Entrar</button>
            )
        }
    const Toggle = toggleButton();
    return (
        <Page>
            <img src={logotipo} alt="Logo Trackit" />
            <form onSubmit={(event)=>validate(event,email,senha)}>
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
            {Toggle}
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
