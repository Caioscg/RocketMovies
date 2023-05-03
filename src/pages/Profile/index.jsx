import { Container, Avatar, Form } from "./styles";
import { Link } from '../../components/Link'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";

export function Profile() {
    return(
        <Container>
            <header>
                <Link to="/" content="Voltar" icon={FiArrowLeft}/>
            </header>


            <Form>
                <Avatar>
                    <img src="https://github.com/Caioscg.png" alt="Foto do usuário" />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input type="file" id="avatar"/>
                    </label>
                </Avatar>

                <Input icon={FiUser} type="text" placeholder="Nome"/>

                <Input icon={FiMail} type="text" placeholder="E-mail"/>

                <Input icon={FiLock} type="password" placeholder="Senha atual"/>
                
                <Input icon={FiLock} type="password" placeholder="Nova senha"/>

                <Button title="Salvar"/>

            </Form>
        </Container>
    )
}