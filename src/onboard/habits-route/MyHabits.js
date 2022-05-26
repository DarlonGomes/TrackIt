import styled from 'styled-components'
import Day from './Day.js';
import { UserContext } from "../../context/UserContext";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function MyHabits ({weekData}) {
    const {data} = useContext(UserContext);
    const navigate = useNavigate();
    const Habit = ({item, id}) => {
        function deleteHabit () {
            if(window.confirm("Você deseja deletar essa hábito?")){
                axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, {headers:{
                    Authorization: `Bearer ${data.token}`
                }}) .then(response => navigate("/"))
            }
        }

        return(
            <Content>
            <Info>
                <HabitTitle id={id}>
                    <p>{item.name}</p>
                </HabitTitle>
                <Week>
                    <Day item={item.days}/>
                </Week>
            </Info>
            <Delete>
                <ion-icon onClick={deleteHabit}name="trash-outline"></ion-icon>
            </Delete>
        </Content>
        )

    }
    return(
       <>
        {weekData.map((item, index)=> <Habit key={index}  id={item.id} item={item} />)}
       </>
    )
}

const Content = styled.div`
    width: 340px;
    min-height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    box-sizing: border-box;
    padding: 15px;
    margin: 0 auto;
`;

const Info = styled.div`
    width: 280px;
    min-height: 60px;
    display: flex;
    flex-direction: column;
`;

const HabitTitle = styled.div`
    width: 280px;
    margin-bottom: 10px;
    p{
     font-family: 'Lexend Deca';
     font-weight: 400;
     font-size: 20px;
     line-height: 25px;
     color: #666666;
     word-wrap: break-word;
    }
`;

const Delete = styled.div`
    margin-left: 15px;
    display: flex;
    justify-content: center;
    ion-icon{
        font-size: 15px;
        color: #666666;
    }
`;
const Week = styled.div`
    
`;
