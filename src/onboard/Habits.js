import Footer from "../Footer";
import Header from "../Header";
import styled from 'styled-components';
export default function Habits (){
    return(
        <Page>
            <Header/>

            <Footer/>
        </Page>
        
        
    )
}

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;