import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-rows: 116px 120px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;

        margin: 40px 106px 85px 123px;

        a {
            display: flex;
            justify-content: flex-start;
        }
        
        h1 {
            font-weight: 500;
            font-size: 36px;
            line-height: 47px;
        }

        .title {
            width: 100%;

            padding-right: 24px;
            margin-top: 40px;

            display: flex;
            
            gap: 40px;
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