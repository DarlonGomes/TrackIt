import styled from 'styled-components';
import { useContext } from 'react';
import UserContext from './context/UserContext.js';
export default function Header () {
    
    return(
        <Page>
            <h3>TrackIt</h3>
            <img src="" alt=""/>
        </Page>
    )
}

const Page = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    box-sizing: border-box;
    padding: 9px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0px;
    left: 0px;

    h3{
        font-family: 'Playball';
        font-weight: 400;
        font-size: 39px;
        color: #FFFFFF;
    }

    img{
        width: 51px;
        height: 51px;
        object-fit: contain;
        border-radius: 98.5px;
    }
`;