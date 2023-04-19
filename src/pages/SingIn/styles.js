import styled from 'styled-components'
import backgroundImg from '../../assets/backgroundImg.png'

export const Container = styled.div`
height: 100vh;
display: flex;
`

export const Form = styled.form`
    padding: 0 170px 0 134px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`