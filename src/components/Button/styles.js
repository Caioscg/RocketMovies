import styled from "styled-components";

import { Link } from "react-router-dom"

export const Container = styled(Link)`
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    font-weight: 500;

    padding: 16px 0;
    margin-top: 8px;
    
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`