import { Container, Profile } from "./styles";

import { Input } from "../Input";

import { Link } from "react-router-dom"

import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function Header() {
    const { signOut } = useAuth()
    const navigate = useNavigate()

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
                    <span onClick={handleProfile}>Caio Gonzaga</span>
                    <Link to="/" onClick={handleSignOut}>
                        sair
                    </Link>
                </div>
                <img src="https://github.com/Caioscg.png" alt="Foto do usuário" onClick={handleProfile}/>
            </Profile>
        </Container>
    )
}