import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from 'react-icons/fi'

import { useAuth } from '../../hooks/auth'

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";

export function SingIn() {
    
    const data = useAuth()
    console.log("MEU CONTEXTO =>", data)

    return(
        <Container>
            <Form>

                <div className="title">
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                </div>

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

                <Link to="/register" content="Criar conta"/>
            </Form>

            <Background />

        </Container>
    )
}