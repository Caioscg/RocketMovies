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
        margin: 40px 116px;

        .tags {
            margin-top: 40px;
            
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .text {
            margin-top: 40px;
            margin-right: 24px;

            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.WHITE};
            text-align: justify;
        }

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