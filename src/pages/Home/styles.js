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

        margin: 0 clamp(40px, 20px + 5vw, 106px) 26px clamp(40px, 20px + 5vw, 123px);

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

    @media (max-width: 500px) {
        main {
            margin-top: 20px;
        }
    }
`

export const Head = styled.div`
    grid-area: head;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px clamp(40px, 20px + 5vw, 106px) 0 clamp(40px, 20px + 5vw, 123px);

    a {
        padding: 16px 32px;
        width: fit-content;
    }

    h1 {
        font-weight: 400;
        font-size: 32px;
        line-height: 42px;
    }

    @media (max-width: 500px) {
        margin-top: 40px;

        a {
            padding: 8px 16px;
        }
    }
`