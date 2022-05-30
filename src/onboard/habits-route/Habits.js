import Footer from "../../Footer";
import Header from "../../Header";
import styled from 'styled-components';
import { useContext, useEffect,useState } from 'react';
import  {UserContext}  from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MyHabits from "./MyHabits";
import CreateForm from "./Form";

export default function Habits (){

    const {token, setToken, setData} = useContext(UserContext);
    const [print, setPrint] = useState(false);
    const [weekData, setWeekData] = useState();
    const [create, setCreate] = useState(false);
    const navigate = useNavigate();
    
    useEffect(()=>{
            const userAuth = JSON.parse(localStorage.getItem("data"));
             setToken({headers:{
                Authorization: `Bearer ${userAuth.token}`
           }})
            setData(userAuth);
           loadHabits(); 
     }
    ,[])
    
    function loadHabits () {
        if(localStorage.length === 0){
            navigate("/");
        }
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', token) 
        .then((response) => {
            if(response.data.length !== 0){
                setWeekData(response.data);
                setPrint(true); 
        }              
        else{
                setPrint("vazio")
        }})
    }

  
    const HabitCheck = () => {
        if(print === true){
            return (
                <MyHabits loadHabits ={loadHabits} weekData={weekData}/>
            )
        }
        if (print === "vazio"){
           return(
            (<h5>Você não tem nenhum hábito cadastrado ainda.
                 Adicione um hábito para começar a trackear!</h5>)
           )
        }
        else{
            return (
                <h5>Carregando</h5>
                )
        }
    }

    const HabitForm = () => {
        if(create === false){
            return (
                <>
                </>
            )
        }

        if(create === true){
            return (

                <CreateForm setCreate={setCreate} loadHabits={loadHabits} token={token}/>
            )
        }
    }

    function addHabit (){
        setCreate(true)
    }

    

    return(
        <Page>
            <Header/>
                <Content>
                    <Info>
                        <h4>Meus hábitos</h4>
                        <button onClick={addHabit}>+</button>
                    </Info>
                    <HabitList>
                        <HabitForm/>
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
    min-height: 800px;
    width: 100vw;
    margin: 70px 0px 70px;
    background-color: #E5E5E5;
    overflow-y:hidden ;
    
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
    box-sizing: border-box;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    
    h5{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 18px;
        color: #666666;
        margin: 0 20px;
    }
`;



