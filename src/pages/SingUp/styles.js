import styled from 'styled-components'
import backgroundImg from '../../assets/backgroundImg.png'

export const Container = styled.div`
    height: 100vh;
    display: flex;

    @media (max-width: 700px) {
        flex-direction: column;
        padding-top: 15px;
    }
`

export const Form = styled.form`
    padding: 0 clamp(30px, 10px + 6vw, 170px) 0 clamp(30px, 10px + 6vw, 134px);

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

    > a:last-child {
        margin: 42px auto;
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`