import { Container, Head } from "./styles";
import { Note } from "../../components/Notes"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"

import { AiOutlinePlus } from "react-icons/ai"

import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function Home() {
    const { notes } = useAuth()

    const navigate = useNavigate()

    function showNote(note_id) {
        navigate(`/details/${note_id}`)   // leva pra pagina da nota
    }

    return(
        <Container>
            <Header />
            <Head>
                <h1>Meus filmes</h1>
                <Button to="/new" title="Adicionar filme" icon={AiOutlinePlus}/>
            </Head>
            <main>

                <div className="notes">
                    {
                        notes.map(note => (
                            <Note
                                key={String(note.id)}
                                data={note}
                                onClick={() => showNote(note.id)}
                            />
                        ))
                    }
                </div>
                
            </main>
        </Container>
    )
}