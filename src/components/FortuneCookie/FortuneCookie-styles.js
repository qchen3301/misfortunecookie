import styled from 'styled-components'

const CookieContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const CookieImg = styled.img`
    height:  300px;
    transition: 0.3s ease-in-out;
    :hover {
        transform: scale(1.1);
    }
    cursor: pointer;
`

export {CookieContainer, CookieImg} 
