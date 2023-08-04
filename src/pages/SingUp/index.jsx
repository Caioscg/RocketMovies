import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { Container, Form, Background } from "./styles";

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";

export function SingUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp() {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos!")
        }

        api.post("/users", { name, email, password })
        .then(() => {
            alert("Usuário cadastrado com sucesso!")
            navigate("/")
        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.message)  // tratamento feito no back-end
            } else {
                alert("Não foi possível cadastrar")
            }
        })
    }

    return(
        <Container>
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
                    onChange={e => setName(e.target.value)}
                />

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

                <Button title="Cadastrar" onClick={handleSignUp} />

                <Link to="/" content="Voltar para o login" icon={FiArrowLeft}/>
            </Form>

            <Background />

        </Container>
    )
}