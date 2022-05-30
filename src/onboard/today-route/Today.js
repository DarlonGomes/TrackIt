import styled from 'styled-components'
import Footer from "../../Footer"
import Header from "../../Header"
import DayHabit from './DayHabit';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import {ProgressContext} from '../../context/ProgressContext'
import axios from 'axios';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import 'dayjs/locale/pt-br';


export default function Hoje (){
    const { setData, setToken} = useContext(UserContext);
    const {progress, setProgress, setTotal} = useContext(ProgressContext);
    const [todayHabits, setTodayHabits] = useState(null);
    const today = getDate();
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
               setToken(token)
                setData(userAuth);
                loadTodayHabits();
         }
        },[])

    function getDate() {
        dayjs.extend(weekday);
        const rawDate = dayjs().locale('pt-br').format("dddd D/MM");
        return formatDay(rawDate)
    }

    function formatDay(string) {
        const trace = string.indexOf('-');
        const empty = string.indexOf(' ');
        const day = string.slice(empty);
        let weekday = string.slice(0, empty);
        if(trace !== -1) {
            weekday = string.slice(0, trace);
        }
        weekday = weekday.replace(string[0], string[0].toUpperCase());
        return `${weekday},${day}`;
    }

    function loadTodayHabits (){
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', token)
        promise.then((response) =>{setTodayHabits(response.data)
    
                                    setTotal(response.data.length)})
            console.log(todayHabits)
    }

   
    function check (){

        if(todayHabits !== null){
            return(
                <>
                {todayHabits.map((item,index)=><DayHabit key={index} id={item.id} item={item} setTodayHabits={setTodayHabits}/>)}
                </>
            )
        }
        else {
            return(
               <Info>
                    <h5>Você não possui hábitos a serem concluídos.</h5>
                </Info>
            )
        }
    }

    function yourProgress (){
        let contador = 0;
        if(todayHabits === null){
            return(
                <p>Nenhum hábito concluído ainda</p>
            )
        }
        if(todayHabits.length === 0){
            return(
                <p>Você não possui hábitos para concluir hoje.</p>
            )
        }
       if(todayHabits.length !== 0 ){
           for(let i = 0; i < todayHabits.length; i++){
               if(todayHabits[i].done === true){
                   contador++
               }
           }
        setProgress(Math.round(contador/todayHabits.length * 100))
           if(contador === 0){
            
               return (
                   <p>Nenhum hábito concluído ainda</p>
               )
           }
           if(contador > 0){
            return(
                <p className='green'>{progress}% dos hábitos concluídos</p>
            )
           }
        }
       }
    
    const progressPercentage = yourProgress();
    const checked = check();
    return(
        <>
            <Header/>
                <Content>
                    <Info>
                        <h4>{today}</h4>
                        {progressPercentage}
                    </Info>
                    {checked}
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
    
`;
const Info = styled.div`
    width: 375px;
    height: 75px;
    box-sizing: border-box;
    padding: 0px 18px;
    display: flex;
    flex-direction: column;
    margin-bottom: 28px;
    
    h4{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 23px;
        color: #126BA5;
        margin-top: 28px;
    }
    h5{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 23px;
        color: #666666;
        margin-top: 28px;
    }
    p{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 18px;
        color: #666666;
        margin-top: 10px;
    }

    .green {
        color: #8FC549;
    }
`;