import { Container, Textarea, Tag } from "./styles";
import { Header } from "../../components/Header"
import { Link } from "../../components/Link"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { FiArrowLeft } from "react-icons/fi"

export function New() {
    return(
        <Container>
            <Header />
            <main>
                <Link content="Voltar" icon={FiArrowLeft}/>

                <h1>Novo filme</h1>

                <div className="inputs">
                    <Input placeholder="Título"/>
                    <Input placeholder="Sua nota (de 0 a 5)"/>
                </div>

                <Textarea placeholder="Observações"/>

                <h2>Marcadores</h2>

                <div className="tags">

                </div>

                <div className="buttons">

                </div>
            </main>
        </Container>
    )
}