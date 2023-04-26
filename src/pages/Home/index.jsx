import { Container, Main } from "./styles";
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { AiOutlinePlus } from "react-icons/ai"

export function Home() {
    return(
        <Container>
            <Header />
            <Main>
                <div>
                    <h1>Meus filmes</h1>
                    <Button title="Adicionar filme" icon={AiOutlinePlus}/>
                </div>
                

            </Main>
        </Container>
    )
}