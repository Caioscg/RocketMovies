import { Container, Profile } from "./styles";

import { Input } from "../Input";

import { Link } from "react-router-dom"

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header() {
    const { signOut, user } = useAuth()
    const navigate = useNavigate()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    function handleProfile() {
        navigate("/profile")
    }

    function handleSignOut() {
        navigate("/")
        signOut()
    }

    return(
        <Container>
            <Link to="/">RocketMovies</Link>

            <Input type="text" placeholder="Pesquisar pelo título"/>

            <Profile>
                <div>
                    <span onClick={handleProfile}>{user.name}</span>
                    <Link onClick={handleSignOut}>
                        sair
                    </Link>
                </div>
                <img src={avatarUrl} alt={user.name} onClick={handleProfile}/>
            </Profile>
        </Container>
    )
}