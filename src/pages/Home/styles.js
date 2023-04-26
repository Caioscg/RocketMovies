import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
`

export const Main = styled.div`
    padding: 50px 106px 58px 123px;

    width: 100%;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
            padding: 16px 32px;
            width: fit-content;
        }

        h1 {
            font-weight: 400;
            font-size: 32px;
            line-height: 42px;
        }
    }

`