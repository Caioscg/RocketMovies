import { Container, Textarea } from "./styles";
import { Header } from "../../components/Header"
import { Link } from "../../components/Link"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { NoteItem } from "../../components/NoteItem"

import { FiArrowLeft } from "react-icons/fi"

import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function New() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rating, setRating] = useState("")

    const [tags, setTags] = useState([]) // array de links
    const [newTag, setNewTag] = useState("") // o nome do novo link

    function handleAddTags() {
        setTags(previousState => [...previousState, newTag])
        setNewTag("")  // limpa o value do newTag
    }

    function handleRemoveTag(deleted) {
        setTags(previousState => previousState.filter(tag => tag !== deleted))
    }

    async function handleNewNote() {
        
    }
    
    return(
        <Container>
            <Header />
            <main>
                <Link to="/" content="Voltar" icon={FiArrowLeft}/>

                <h1>Novo filme</h1>

                <div className="inputs">
                    <Input 
                        placeholder="Título" 
                        onChange={e => setTitle(e.target.value)}
                    />
                    <Input 
                        placeholder="Sua nota (de 0 a 5)"
                        onChange={e => setRating(e.target.value)}
                    />
                </div>

                <Textarea 
                    placeholder="Observações"
                    onChange={e => setDescription(e.target.value)}
                />

                <h2>Marcadores</h2>

                <div className="tags">
                    {
                        tags.map((tag, index) => (
                            <NoteItem 
                                key={String(index)}
                                value={tag}
                                onClick={() => handleRemoveTag(tag)}
                            />
                        ))
                    }
                    <NoteItem 
                        isNew
                        placeholder="Novo marcador"
                        value={newTag}
                        onChange={e => setNewTag(e.target.value)}
                        onClick={handleAddTags}
                    />
                </div>

                <div className="buttons">
                    <Button title="Excluir filme"/>
                    <Button title="Salvar alterações"/>
                </div>
            </main>
        </Container>
    )
}