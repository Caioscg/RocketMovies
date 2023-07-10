import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from 'react-icons/fi'

import { useAuth } from '../../hooks/auth'
import { useState } from "react";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";

export function SingIn() {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signIn } = useAuth()
    
    function handleSignIn() {
        signIn({ email, password })
    }

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
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    placeholder="Senha"
                    icon={FiLock}
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Entrar" onClick={handleSignIn}/>

                <Link to="/register" content="Criar conta"/>
            </Form>

            <Background />

        </Container>
    )
}