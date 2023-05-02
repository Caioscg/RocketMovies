import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;

        margin: 40px 106px 0 123px;
        padding-right: 24px;
        padding-bottom: 32px;

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

        a {
            display: flex;
            justify-content: flex-start;
        }
        
        h1 {
            font-weight: 500;
            font-size: 36px;
            line-height: 47px;
        }

        .inputs {
            width: 100%;
            
            margin-top: 40px;

            display: flex;
            
            gap: 40px;
        }

        h2 {
            font-weight: 400;
            font-size: 20px;
            line-height: 26px;

            color: ${({ theme }) => theme.COLORS.GRAY_300};

            margin-top: 32px;
        }
        
        .tags {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};

            border-radius: 8px;

            padding: 16px;
            margin-top: 24px;

            display: flex;
            gap: 24px;

            flex-wrap: wrap;
        }

        .buttons {
            display: flex;
            gap: 40px;

            margin-top: 32px;

            > button:first-child {
                background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
                color: ${({ theme }) => theme.COLORS.PINK};
            }
        }
    }
`

export const Textarea = styled.textarea`
    width: 100%;
    height: 270px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    resize: none;
    
    border-radius: 10px;
    padding: 16px;

    margin-top: 32px;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
`