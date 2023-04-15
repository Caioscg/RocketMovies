import { Header } from "../../components/Header"
import { Link } from "../../components/Link"

import { FiArrowLeft } from "react-icons/fi"

import { Container } from "./styles"

export function Details() {
    return (
        <Container>
            <Header />
            <main>
                <Link content="Voltar" icon={FiArrowLeft}/>
            </main>
        </Container>
        
    )
}