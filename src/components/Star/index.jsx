import { Container } from "./styles";

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export function Star({ number, size }) {
    return (
        <Container>
                { number-- > 0 ? <AiFillStar size={size} /> : <AiOutlineStar size={size} />}

                { number-- > 0 ? <AiFillStar size={size} /> : <AiOutlineStar size={size} />}

                { number-- > 0 ? <AiFillStar size={size} /> : <AiOutlineStar size={size} />}

                { number-- > 0 ? <AiFillStar size={size} /> : <AiOutlineStar size={size} />}

                { number-- > 0 ? <AiFillStar size={size} /> : <AiOutlineStar size={size} />}
        </Container>
    )
}