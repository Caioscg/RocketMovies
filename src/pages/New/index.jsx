import { Container, Textarea } from "./styles";
import { Header } from "../../components/Header"
import { Link } from "../../components/Link"
import { Input } from "../../components/Input"

import { FiArrowLeft } from "react-icons/fi"

export function New() {
    return(
        <Container>
            <Header />
            <main>
                <Link content="Voltar" icon={FiArrowLeft}/>
                <h1>Novo filme</h1>
                <div className="title">
                    <Input placeholder="Título"/>
                    <Input placeholder="Sua nota (de 0 a 5)"/>
                </div>
                <Textarea placeholder="Observações"/>
            </main>
        </Container>
    )
}