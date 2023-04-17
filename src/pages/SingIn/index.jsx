import { Container, Form } from "./styles";

import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from "../../components/Input";

export function SingIn() {
    return(
        <Container>
            <div className="title">
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
            </div>

            <h2>Faça seu login</h2>

            <Form>
                <Input 
                    placeholder="E-mail"
                    icon={FiMail}
                    type="text"
                />
            </Form>

        </Container>
    )
}