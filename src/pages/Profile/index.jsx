import { Container, Avatar, Form } from "./styles";
import { Link } from '../../components/Link'
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";

export function Profile() {
    return(
        <Container>
            <header>
                <Link content="Voltar para o login" icon={FiArrowLeft}/>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/Caioscg.png" alt="Foto do usuário" />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input type="file" id="avatar"/>
                    </label>
                </Avatar>
            </Form>
        </Container>
    )
}