import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-rows: 116px 120px auto;
    grid-template-areas: 
    "header"
    "head"
    "content";

    > main {
        grid-area: content;

        margin: 0 106px 26px 123px;

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

        .notes {
            margin-right: 8px;
        }
    }
`

export const Head = styled.div`
    grid-area: head;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px 106px 0 123px;

    a {
        padding: 16px 32px;
        width: fit-content;
    }

    h1 {
        font-weight: 400;
        font-size: 32px;
        line-height: 42px;
    }
`