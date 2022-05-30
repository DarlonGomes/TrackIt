import styled from 'styled-components'
import Footer from "../../Footer"
import Header from "../../Header"
export default function History (){
    return(
        <>
        <Header/>
        <Content>
            <Info><h4>Histórico</h4></Info>
            <h5>Em breve você poderá ver o histórico dos seus hábitos aqui!</h5>
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

    h5{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 18px;
        color: #666666;
        margin: 0 20px;
    }
    
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
`;