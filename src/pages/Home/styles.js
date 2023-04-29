import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
`

export const Main = styled.div`
    padding: 50px 106px 58px 123px;

    width: 100%;

    overflow-y: auto;
    ::-webkit-scrollbar {
            width: 8px;
        }

    ::-webkit-scrollbar-track {
            background-color: transparent;
            margin-block: 2px;
            
    }

    ::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.COLORS.PINK};
            border-radius: 100vw;
    }

    > .head {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 38px;

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