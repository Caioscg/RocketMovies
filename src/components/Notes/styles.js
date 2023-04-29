import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-height: 222px;
    padding: 32px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    border-radius: 16px;

    margin-top: 24px;

    display: flex;
    flex-direction: column;

    > h3 {
        font-size: 26px;
        line-height: 32px;

        align-self: start;

        margin-bottom: 8px;
    }

    > div {
        align-self: start;
    }

    > p {
        font-size: 16px;
        line-height: 19px;

        color: ${({ theme }) => theme.COLORS.GRAY_300};

        /* truque para por 3 pontinhos em texto com overflow ocupando 2 linhas */
        display: -webkit-box; 
        text-overflow: ellipsis; 
        overflow: hidden; 
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical;
        
        height: 40px;

        margin-top: 10px;
    }

    > footer {
        margin-top: 24px;
        display: flex;
        gap: 8px;

        align-self: start;
    }
`