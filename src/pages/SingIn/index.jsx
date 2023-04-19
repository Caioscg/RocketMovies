import { Container, Form, Background } from "./styles";

import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";

export function SingIn() {
    return(
        <Container>
            <Form>

                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input 
                    placeholder="E-mail"
                    icon={FiMail}
                    type="text"
                />

                <Input 
                    placeholder="Senha"
                    icon={FiLock}
                    type="password"
                />

                <Button title="Entrar"/>

                <Link content="Criar conta"/>
            </Form>

            <Background />

        </Container>
    )
}