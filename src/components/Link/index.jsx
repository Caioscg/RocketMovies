import { Container } from "./styles";

export function Link({ content, icon: Icon, ...rest }) {
    return(
        <Container {...rest} href="/">
            {Icon && <Icon size={20} />} 
            { content }
        </Container>
    )
}