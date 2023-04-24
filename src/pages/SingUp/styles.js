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
    justify-content: center;

    .title {

        text-align: center;

        h1 {
            font-size: 48px;
            line-height: 63px;
            color: ${({ theme }) => theme.COLORS.PINK};
        }

        p {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: 14px;
            line-height: 18px;
        }
    }

    > h2 {
        text-align: left;
        margin: 48px 5px; 
    }

    > a {
        margin: 42px auto;
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`