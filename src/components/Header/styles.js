import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;

    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 116px;
    width: 100%;
    padding: 0 123px;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};

    > a {
        font-size: 30px;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.PINK};
        transition: filter 700ms;

        &:hover {
            filter: drop-shadow(0 0 1.5em ${({ theme }) => theme.COLORS.PINK});
        }
    }


`

export const Input = styled.input`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
        
    width: 630px;
    height: 56px;
    padding: 19px 24px;

    border-radius: 10px;

    border: 0;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 9px;

    max-width: 200px;

    > div {
        display: flex;
        flex-direction: column;
        text-align: right;

        a {
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }

    > img {
        width: 64px;
        height: 64px;

        border-radius: 50%;
    }
`