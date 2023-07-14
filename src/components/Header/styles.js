import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;

    display: flex;
    align-items: center;
    gap: clamp(20px, 50px + 5vw, 128px);

    height: 116px;
    width: 100%;
    padding: 0 123px;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};

    > a:first-child {
        font-size: 30px;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.PINK};
        transition: filter 700ms;

        &:hover {
            filter: drop-shadow(0 0 1.5em ${({ theme }) => theme.COLORS.PINK});
        }
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 9px;

    min-width: fit-content;
    justify-content: right;

    cursor: pointer;

    > div {
        display: flex;
        flex-direction: column;
        text-align: right;
        font-size: 14px;
        line-height: 18px;
        

        span {
            font-weight: 700;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        a {
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }

    > img {
        width: 64px;
        height: 64px;

        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }
`