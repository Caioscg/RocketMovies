import { Container, Avatar, Form } from "./styles";
import { Link } from '../../components/Link'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { api } from "../../services/api";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Profile() {
    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [oldPassword, setOldPassword] = useState()
    const [newPassword, setNewPassword] = useState()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    async function handleUpdate() {
        const updated = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword
        }

        const userUpdated = Object.assign(user, updated)  // junta o user com as mudanças, sem perder o que não mudou

        await updateProfile({ user: userUpdated, avatarFile })  // avatarFile é o arq selecionado pelo user
    }

    function handleAvatarChange(event) {  // onChange passa o event de forma automática
        const file = event.target.files[0]   // 1a posição
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    return(
        <Container>
            <header>
                <Link to="/" content="Voltar" icon={FiArrowLeft}/>
            </header>


            <Form>
                <Avatar>
                    <img src={avatar} alt="Foto do usuário" />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input 
                            type="file" 
                            id="avatar" 
                            onChange={handleAvatarChange}
                        />
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