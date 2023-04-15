import { Header } from "../../components/Header"
import { Link } from "../../components/Link"
import { Star } from "../../components/Star"

import { FiArrowLeft } from "react-icons/fi"
import { AiOutlineClockCircle } from "react-icons/ai"

import { Container, Title, Infos } from "./styles"

export function Details() {
    return (
        <Container>
            <Header />
            <main>
                <Link content="Voltar" icon={FiArrowLeft}/>

                <Title>
                    <h2>Interestellar</h2>
                    <Star size="20" number="4" />
                </Title>

                <Infos>
                    <div className="user">
                        <img src="https://github.com/Caioscg.png" alt="Foto do usuário" />
                        <span>Por Caio Gonzaga</span>
                    </div>
                    <div className="time">
                        <span><AiOutlineClockCircle /></span>
                        <span>15/04/23 às 20:00</span>
                    </div>
                </Infos>

            </main>
        </Container>
        
    )
}