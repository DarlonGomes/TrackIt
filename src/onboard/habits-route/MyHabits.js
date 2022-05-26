import styled from 'styled-components'

export default function MyHabits () {
    return(
        <Content>
            <Info>
                <HabitTitle>
                    <p>Não usar ternário</p>
                </HabitTitle>
            </Info>
            <Delete>
            <ion-icon name="trash-outline"></ion-icon>
            </Delete>
        </Content>
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
`;

const HabitTitle = styled.div`
    width: 280px;

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
    display: flex;
    justify-content: center;
    ion-icon{
        font-size: 15px;
        color: #666666;
    }
`;