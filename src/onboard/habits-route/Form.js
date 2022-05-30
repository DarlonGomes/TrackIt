import styled from 'styled-components'
import {UserContext} from '../../context/UserContext';
import { useContext, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import axios from 'axios';
export default function CreateForm ({setCreate, loadHabits}){
    const {token} = useContext(UserContext);
    const [weekdays, setWeekdays] = useState([{day:"D", id: 0, tap: false},{day:"S", id: 1, tap: false}, {day:"T", id: 2, tap: false}, {day:"Q", id: 3, tap: false}, {day:"Q", id: 4, tap: false}, {day:"S", id: 5, tap: false}, {day:"S", id: 6, tap: false}]);
    const [habit, setHabit] = useState("");
    const [selectedDays, setSelectedDays] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);
    function handleDay(index) {
        const tapDay = [...weekdays];
        tapDay[index].tap=!tapDay[index].tap
        const id = tapDay[index].id
        setWeekdays(tapDay)
        if(selectedDays.includes(id)){
            const filtered = selectedDays.filter(item => item !== id)
            setSelectedDays(filtered)
        }else{
            const newDay = [...selectedDays, id];
            setSelectedDays(newDay)
        }
        
    };  

    function handleCancel () {
        setSelectedDays([]);
        setHabit("");
        setCreate(false);
    }

    function handleCreate (){
        const body = {
            name: habit,
            days: selectedDays
        }

        if(habit === "" && selectedDays.length === 0){
            alert("Preencha os campos de nome e selecione ao menos um dia da semana.")
            return;
        }
        if(habit === ""){
            alert ("Nomeie o seu novo hábito.")
            return;
        }
        if(selectedDays.length === 0){
            alert("Você deve selecionar ao menos um dia.")
            return;
        }

        setIsDisabled(true);

        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', body, token)
            .then((response)=> {
                setIsDisabled(false)
                setCreate(false)
                loadHabits();
            })
        }
        
     function saveButton () {

        if(isDisabled === true){
            return (
                <>
            <button><ThreeDots  color="#FFFFFF" height={17} width={35} /></button>
            </>
            )
        }

        return(
            <>
            <button onClick={handleCreate}>Salvar</button>
            </>
        )
    }

    const SaveButton = saveButton();
    return(
        <Model isDisabled = {isDisabled}>
        
                <input
                type="text"
                placeholder='nome do habito'
                onChange={(e) => setHabit(e.target.value)}
                value={habit}
                >
                </input>
                <Week isDisabled = {isDisabled}>
                    {weekdays.map((item,index) =><ToggleDay key={index}  id={item.id} onClick={()=>handleDay(index)} tap={item.tap}> {item.day} </ToggleDay>)}
                </Week>
           
            <Buttons>
                <button onClick={handleCancel}className='cancel'>Cancelar</button>
                {SaveButton}
            </Buttons>
        </Model>
    )
}

const Model = styled.div`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 15px;
    margin: 0 auto 10px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    pointer-events: ${(props) => props.isDisabled ? "none" : "all"};
    input{
        width: 303px;
        height: 45px;
        background: ${(props) => props.isDisabled ? "#F2F2F2" : "#FFFFFF"};
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 20px;
        color: #666666;
        box-sizing: border-box;
        padding: 0 10px;
        margin-bottom: 8px;
        pointer-events: ${(props) => props.isDisabled ? "none" : "all"};
    }
`;
const Week = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    gap: 4px;
    pointer-events: ${(props) => props.isDisabled ? "none" : "all"};
`;

const ToggleDay = styled.div`
    width: 30px;
    height: 30px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${(props) => props.tap ? "1px solid #CFCFCF" : "1px solid #D5D5D5"};
    border-radius: 5px;
    background: ${(props) => props.tap ? "#CFCFCF" : "#FFFFFF"};
    color: ${(props) => props.tap ? "#FFFFFF" : "#DBDBDB"};
`; 

const Buttons = styled.div `
    width: 310px;
    height: 35px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;

    button{
        width: 84px;
        height: 35px;
        border: none;
        font-family: 'Lexend Deca';
        font-size: 16px;
        font-weight: 400;
        border-radius: 5px;
        color: #FFFFFF;
        background-color: #52B6FF;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cancel{
        color: #52B6FF;
        background-color: #FFFFFF;
    }
`;

