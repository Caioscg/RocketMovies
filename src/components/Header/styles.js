import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;

    display: flex;
    align-items: center;
    gap: clamp(10px, 20px + 5vw, 128px);

    height: 116px;
    width: 100%;
    padding: 0 clamp(30px, 10px + 5vw ,123px);

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

    > input {
        height: 56px;
        width: 100%;
        border-radius: 10px;

        padding: 16px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        border: 0;
        padding: 24px 19px;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }

    @media (max-width: 780px) {
        display: grid;
        grid-template-areas: "A B"
        "C C";
        gap: 0;
        height: 150px;

        > a:first-child {
            grid-area: A;
        }

        > div {
            grid-area: B;
        }

        > input {
            grid-area: C;
            height: 42px;
            margin-bottom: 20px;
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