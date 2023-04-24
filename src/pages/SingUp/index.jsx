import { Container, Form, Background } from "./styles";

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";

export function SingUp() {
    return(
        <Container>
            <Background />

            <Form>

                <div className="title">
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                </div>

                <h2>Crie sua conta</h2>

                <Input 
                    placeholder="Nome"
                    icon={FiUser}
                    type="text"
                />

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

                <Button title="Cadastrar"/>

                <Link content="Voltar para o login" icon={FiArrowLeft}/>
            </Form>

        </Container>
    )
}