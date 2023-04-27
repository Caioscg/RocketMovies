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

    > h1 {
        font-size: 24px;
        line-height: 32px;
    }

    > p {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        overflow: hidden;
        text-overflow: ellipsis;
        
        margin-top: 8px;
    }

    > footer {
        margin-top: 15px;
        display: flex;
        gap: 8px;
    }
`