import styled from 'styled-components'
import { UserContext } from '../../context/UserContext';
import { useContext, useState } from 'react';
import axios from 'axios';
export default function CreateForm ({setCreate, loadHabits}){
    const {token} = useContext(UserContext);
    const [weekdays, setWeekdays] = useState([{day:"D", id: 0, tap: false},{day:"S", id: 1, tap: false}, {day:"T", id: 2, tap: false}, {day:"Q", id: 3, tap: false}, {day:"Q", id: 4, tap: false}, {day:"S", id: 5, tap: false}, {day:"S", id: 6, tap: false}]);
    const [habit, setHabit] = useState("");
    const [selectedDays, setSelectedDays] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);
    const save = true;
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
        console.log(habit)
        console.log(selectedDays)

        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', body, token)
            .then((response)=> {
                setCreate(false)
                loadHabits();
            })
        }

    return(
        <Model>
        
                <input
                type="text"
                placeholder='nome do habito'
                onChange={(e) => setHabit(e.target.value)}
                value={habit}
                >
                </input>
                <Week >
                    {weekdays.map((item,index) =><ToggleDay key={index}  id={item.id} onClick={()=>handleDay(index)} tap={item.tap}> {item.day} </ToggleDay>)}
                </Week>
           
            <Buttons>
                <button onClick={handleCancel}className='cancel'>Cancelar</button>
                <button onClick={handleCreate}>Salvar</button>
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
    
    input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 20px;
        color: #666666;
        box-sizing: border-box;
        padding: 0 10px;
        margin-bottom: 8px;
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
    }

    .cancel{
        color: #52B6FF;
        background-color: #FFFFFF;
    }
`;