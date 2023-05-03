import { Container, Profile } from "./styles";

import { Input } from "../Input";
import { Link } from "react-router-dom";

export function Header() {
    return(
        <Container>
            <Link to="/">RocketMovies</Link>

            <Input type="text" placeholder="Pesquisar pelo título"/>

            <Profile to="/profile">
                <div>
                    <span>Caio Gonzaga</span>
                    <Link to="/">sair</Link>
                </div>
                <img src="https://github.com/Caioscg.png" alt="Foto do usuário" />
            </Profile>
        </Container>
    )
}