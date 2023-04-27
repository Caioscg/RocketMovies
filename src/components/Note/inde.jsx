import { Container } from "./styles";
import { Star } from "../Star"
import { Tags } from "../Tags"

export function Note({data, ...rest}) {
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>
            <Star number={data.starNumber} size="20"/>
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