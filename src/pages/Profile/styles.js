import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > header {
        width: 100%;
        height: 144px;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
        position: relative;

        a {
            color: ${({ theme }) => theme.COLORS.PINK};
            position: absolute;
            top: 64px;
            left: 144px;
        }
    }

`

export const Form = styled.form`
    max-width: 340px;
    margin: 0 auto;

    div:nth-child(3) {
        margin-bottom: 16px;
    }

    div:nth-child(5) {
        margin-bottom: 16px;
    }

`

export const Avatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 186px;
    height: 186px;

    position: relative;
    z-index: 2;

    margin: -95px auto 64px;

    > img {
        width: 186px;
        height: 186px;

        border-radius: 50%; 
    }

    > label {
        width: 48px;
        height: 48px;

        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 2px;
        right: 2px;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        }
    }

`