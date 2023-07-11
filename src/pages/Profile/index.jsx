import { Container, Avatar, Form } from "./styles";
import { Link } from '../../components/Link'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function Profile() {
    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [oldPassword, setOldPassword] = useState()
    const [newPassword, setNewPassword] = useState()

    async function handleUpdate() {
        const user = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword
        }

        await updateProfile({ user })
    }

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

                <Input 
                    icon={FiUser} 
                    type="text" 
                    placeholder="Nome" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input 
                    icon={FiMail} 
                    type="text" 
                    placeholder="E-mail" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    icon={FiLock} 
                    type="password" 
                    placeholder="Senha atual"
                    onChange={e => setOldPassword(e.target.value)}
                />
                
                <Input 
                    icon={FiLock} 
                    type="password" 
                    placeholder="Nova senha"
                    onChange={e => setNewPassword(e.target.value)}
                />

                <Button title="Salvar" onClick={handleUpdate}/>

            </Form>
        </Container>
    )
}