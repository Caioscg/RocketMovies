import { Container, Profile } from "./styles";

import { Input } from "../Input";

import { Link } from "react-router-dom"

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"; 

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header() {
    const [search, setSearch] = useState("")

    const { signOut, user, searchNotes } = useAuth()
    const navigate = useNavigate()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    function handleProfile() {
        navigate("/profile")
    }

    useEffect(() => {        
        searchNotes(search)
    }, [search])

    return(
        <Container>
            <Link to="/">RocketMovies</Link>

            <Input 
                type="text" 
                placeholder="Pesquisar pelo título"
                onChange={e => setSearch(e.target.value)}
            />

            <Profile>
                <div>
                    <span onClick={handleProfile}>{user.name}</span>
                    <Link to="/" onClick={signOut}>
                        sair
                    </Link>
                </div>
                <img src={avatarUrl} alt={user.name} onClick={handleProfile}/>
            </Profile>
        </Container>
    )
}