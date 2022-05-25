import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import ProgressContext from "./context/ProgressContext.js";
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";
 import styled from 'styled-components'
 const Footer = () => {
     const {progress} = useContext(ProgressContext)
     const navigate = useNavigate();
    return (
        <Page>
            
                <button onClick={()=> navigate("/habitos")}>Hábitos</button>
               
        <Link to ="/hoje" style={{textDecoration: 'none'}}>
            <ProgressBar>
                    <CircularProgressbar backgroundPadding={6} strokeWidth={9} value={progress} text="Hoje" background />
            </ProgressBar>
            </Link>
        
                <button onClick={()=> navigate("/historico")}>Histórico</button>
               
            
        </Page>
    )
}
export default Footer;

const Page = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0px;
    left: 0px;
    background-color: #FFFFFF;
    
    button{
        width: 90px;
        height: 50px;
        background-color: #FFFFFF;
        border: none;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 18px;
        text-align: center;
        color: #52B6FF;
        margin: 10px;
    }
`;

const ProgressBar = styled.div`
    height: 91px;
    width: 91px;
    margin-bottom: 60px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;
    .CircularProgressbar-path {
        stroke: #FFFFFF;
        
    }
    .CircularProgressbar-trail {
        stroke: #52B6FF;
        
    }
    .CircularProgressbar-text {
        fill: #FFFFFF;
        
    }
    .CircularProgressbar-background {
        fill: #52B6FF;
    }
`;