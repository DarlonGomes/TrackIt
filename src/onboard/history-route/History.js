import styled from 'styled-components'
import Footer from "../../Footer"
import Header from "../../Header"
import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
export default function History (){
    const {setData, setToken} = useContext(UserContext);
    const navigate = useNavigate();
    let token;
    useEffect(()=>{
        if(localStorage.length === 0){
            navigate("/");
        }

        else{
                const userAuth = JSON.parse(localStorage.getItem("data"));
                 token = {headers:{
                    Authorization: `Bearer ${userAuth.token}`
               }}
               setToken({headers:{
                Authorization: `Bearer ${userAuth.token}`
           }})
                setData(userAuth);
                
         }
        },[])

    return(
        <>
        <Header/>
        <Content>
            <Info><h4>Histórico</h4></Info>
            <h5>Em breve você poderá ver o histórico dos seus hábitos aqui!</h5>
        </Content>
        <Footer/>
        </>
    )
}

const Content = styled.div`
    min-height: 800px;
    width: 100%;
    margin: 70px 0px 70px;
    background-color: #E5E5E5;
    overflow-y:hidden ;

    h5{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 18px;
        color: #666666;
        margin: 0 20px;
    }
    
`;
const Info = styled.div`
    width: 375px;
    height: 75px;
    box-sizing: border-box;
    padding: 0px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 23px;
        color: #126BA5;
    }
`;