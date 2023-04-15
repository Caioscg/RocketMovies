import styled from "styled-components";

//import { Link } from "react-router-dom";

export const Container = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    font-size: 16px;

    color: ${({ theme }) => theme.COLORS.PINK};
`