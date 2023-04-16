import { Container } from "./styles";

export function Tags({ title, ...rest }) {
    return(
        <Container {...rest}>
            <span>{title}</span>
        </Container>
    )
}