import Footer from "../Footer";
import Header from "../Header";
import styled from 'styled-components';
import { useContext, useEffect,useState } from 'react';
import { UserContext } from "../context/UserContext";
import axios from "axios";
export default function Habits (){
    const {data} = useContext(UserContext);
    const [print, setPrint] = useState(false)
        useEffect(()=>{
            axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {headers:{
            Authorization: `Bearer ${data.token}`
        }}) .then((response) => {if(response.length !== 0){setPrint(true)}
                                 else{setPrint("vazio")}}) 
        },[])
    const HabitCheck = () => {
        if(print === true){
            return (
                <p>Ainda não foi implementado</p>
            )
        }
        if (print === "vazio"){
            return (<p></p>)
        }
        else{
            return (
                <p>Carregando</p>
                )
        
        }
    }
    return(
        <Page>
            <Header/>
                <Content>
                    <Info>
                        <h4>Meus hábitos</h4>
                        <button>+</button>
                    </Info>
                    <HabitList>
                       <HabitCheck/>
                    </HabitList>
                </Content>
            <Footer/>
        </Page>
    )
}

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Content = styled.div`
    margin: 70px 0px 70px;
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

    button{
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.5px;
        border: none;
        font-weight: 400;
        font-size: 27px;
        color: #FFFFFF;
    }
`;

const HabitList = styled.div`
    display: flex;
    flex-direction: column;
`;

const HabitCheck = styled.div`
p{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 18px;
        color: #666666;
}

`;