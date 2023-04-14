import { Container, Input, Profile } from "./styles";

export function Header() {
    return(
        <Container>
            <a href="/">RocketMovies</a>

            <Input type="text" placeholder="Pesquisar pelo título"/>

            <Profile>
                <div>
                    <span>Caio Gonzaga</span>
                    <a href="/">Sair</a>
                </div>
                <img src="https://github.com/Caioscg.png" alt="Foto do usuário" />
            </Profile>
        </Container>
    )
}