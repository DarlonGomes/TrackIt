import styled from 'styled-components'
import { UserContext } from '../../context/UserContext';
import { useContext, useState } from 'react';
export default function Form ({setCreate}){
    const {data} = useContext(UserContext);
    const [weekDays, setWeekDays] = useState([]);
    const [habit, setHabit] = useState("");
    return(
        <Model>
            <form>
                <input
                type="text"
                placeholder='nome do habito'
                onChangeCapture={(e) => setHabit(e.target.value)}
                value={habit}
                required
                >
                </input>
                
            </form>
        </Model>
    )
}

const Model = styled.div`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    
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
    }
`;
