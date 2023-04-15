import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: auto;
        padding: 40px 116px;

    }
`

export const Title = styled.div`
    display: flex;
    align-items: baseline;
    
    > h2 {
        font-size: 36px;
        font-weight: 500;
        margin-right: 20px;
    }
`

export const Infos = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;

    margin-top: 24px;

    .user {
        display: flex;
        align-items: center;
        gap: 8px;

        margin-bottom: 2px;

        img {
            width: 16px;
            border-radius: 50%
        }
    }

    .time {
        display: flex;
        align-items: flex-start;
        gap: 8px;

        span:first-child {
            color: ${({ theme }) => theme.COLORS.PINK};
            margin-top: 2px;
        }
    }
`