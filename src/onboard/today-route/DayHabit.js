import styled from 'styled-components';
import check from '../../assets/check.png'
import {useState, useContext} from 'react';
import axios from 'axios';
import  {UserContext}  from '../../context/UserContext';


export default function DayHabit({item, id, setTodayHabits}){
const [isDone, setIsDone] = useState(item.done);
const {token} = useContext(UserContext);
let isEqual;

function singularHighest(){
    if(item.highestSequence > 1){
        return (<> dias</>)
    }
    return (<>dia</>)
}
const checkSingularHighest = singularHighest();

function singularCurrent(){
    if(item.currentSequence > 1){
        return (<> dias</>)
    }
    return (<>dia</>)
}
const checkSingularCurrent = singularCurrent();

function toggleCheck(){
    if(isDone === false){
        setAsDone();
    }
    if(isDone === true){
        setAsUndone();
    }
}
function isSequenceEqual(){
    if(item.currentSequence === item.highestSequence && item.highestSequence !== 0){
        isEqual = true;
    }
    else{
        isEqual = false;
    }
}

function setAsDone (){
    axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,{}, token)
         .then (response => {
            setIsDone(!isDone);
            refreshIt()})
} 

function setAsUndone (){
    axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,{}, token)
         .then (response => {
            setIsDone(!isDone);
            refreshIt()})
}

function refreshIt () {
    const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', token)
        promise.then((response) =>{setTodayHabits(response.data)})
}

 isSequenceEqual();

    return (
        <Habit>
            <HabitInfo isEqual={isEqual} isDone={isDone}>
                <h5>{item.name}</h5>
                <div className='sequence'>
                <p>Sequência atual :{'\u00A0'}</p> <p className='checked'>{item.currentSequence} {checkSingularCurrent}</p>
                </div>
                <div className='sequence'>
                <p>Seu recorde :{'\u00A0'}</p> <p className='validate'>{item.highestSequence} {checkSingularHighest}</p>
                </div>
            </HabitInfo>
            <Done onClick={()=> toggleCheck()} isDone={isDone}>
            <img src={check} alt="check"/>
            </Done>
        </Habit>
    )
}

const Habit = styled.div`
    width: 340px;
    min-height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px auto;
`;

const HabitInfo = styled.div`
    font-family: 'Lexend Deca';
    min-height: 64px;
    font-weight: 400;
    font-size: 20px;
    color: #666666;

    h5{
        width: 208px;
        font-size: 20px;
        margin-bottom: 12px;
       
    }
    p{
        font-size: 13px;
        margin-bottom: 2px;
    }
    .sequence{
        display: flex;
    }
    .checked{
        color: ${(props)=> props.isDone ? "#8FC549" : "#666666"}
    }
    .validate{
        color: ${(props)=> props.isEqual ? "#8FC549" : "#666666"}
    }
`;

const Done = styled.div`
    width: 69px;
    height: 69px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.isDone ? "#8FC549" : "#EBEBEB;"};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
`;