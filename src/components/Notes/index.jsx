import { Container } from "./styles";
import { Star } from "../Star"
import { Tags } from "../Tags"

export function Note({data, ...rest}) {
    return(
        <Container {...rest}>
            <h3>{data.title}</h3>
            <Star number={data.starNumber} size="12"/>
            <p>
                {data.description}
            </p>
            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tags key={tag.id} title={tag.name} /> )
                    }
                </footer>
            }
        </Container>
    )
}