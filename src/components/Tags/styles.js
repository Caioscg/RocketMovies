import styled from "styled-components";

export const Container = styled.div`
    padding: 6px 16px 8px;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    width: fit-content;
    > span {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 12px;
    }
`