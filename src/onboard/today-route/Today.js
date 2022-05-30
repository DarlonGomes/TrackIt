import styled from 'styled-components'
import Footer from "../../Footer"
import Header from "../../Header"
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import dayjs from 'dayjs';
export default function Hoje (){
    const {token} = useContext(UserContext);
    const [todayHabits, setTodayHabits] = useState(null);
    const now = dayjs()

    function loadTodayHabits (){
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', token)
        promise.then((response) =>{ console.log(response.data);
                            setTodayHabits(response.data)})
    }
    useEffect(loadTodayHabits,[])
    return(
        <>
            <Header/>
                <Content>
                    <Info>
                        <h4>Domingo, 29/05</h4>
                        <p>Nenhum hábito conluído ainda</p>
                    </Info>
                </Content>
            <Footer/>
        </>
    )
}
const Content = styled.div`
    min-height: 740px;
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
    
    h4{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 23px;
        color: #126BA5;
        margin-top: 28px;
    }

    p{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 18px;
        color: #666666;
        margin-top: 10px;
    }
`;