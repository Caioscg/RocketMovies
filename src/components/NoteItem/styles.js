import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    width: fit-content;

    padding: 16px;

    border-radius: 10px;

    display: flex;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_200}` : "none"};
    
    > button {
        border: none;
        background: none;
        color: ${({ theme }) => theme.COLORS.PINK};

        font-size: 22px;
    }

    > input {
        width: 11.8rem;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }
`