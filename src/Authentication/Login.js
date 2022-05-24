import styled from 'styled-components'
export default function Login (){
    function logo(){
        return (
            <>
                Oi
            </>
        )
    }
    const Logo = logo;
    return (
        <Page>
            {Logo}
        </Page>
    )
}

const Page = styled.div`
    width: 375px;
    height: 667px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;