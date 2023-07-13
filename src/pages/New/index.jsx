import { Container, Textarea } from "./styles";
import { Header } from "../../components/Header"
import { Link } from "../../components/Link"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { NoteItem } from "../../components/NoteItem"

import { FiArrowLeft } from "react-icons/fi"

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function New() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rating, setRating] = useState("")

    const [tags, setTags] = useState([]) // array de links
    const [newTag, setNewTag] = useState("") // o nome do novo link

    const navigate = useNavigate()

    function handleAddTags() {
        setTags(previousState => [...previousState, newTag])
        setNewTag("")  // limpa o value do newTag
    }

    function handleRemoveTag(deleted) {
        setTags(previousState => previousState.filter(tag => tag !== deleted))
    }

    async function handleNewNote() {
        if (!title) {
            return alert("Digite o título do filme.")
        }
        if (!rating) {
            return alert("Dê uma nota ao filme.")
        }
        if (Number(rating) > 5 || Number(rating) < 0) {
            return alert("A nota deve estar entre 0 e 5.")
        }
        if (!Number.isInteger(Number(rating))) {
            return alert("A nota deve ser um número inteiro.")
        }
        if (newTag) {
            return alert("Você tem uma tag no campo de adicionar não salva. Clique para adicionar ou deixe o campo vazio.")
        }

        try {
            await api.post("/notes", {
                title,
                description,
                rating: Number(rating),
                tags
            })
            alert("Nota criada com sucesso")
        } catch(error) {
            if (error.response) {
                alert(error.response.data.message)
            }
            else {
                alert("Não foi possível cadastrar a nota.")
            }
        }
        
        navigate(-1)
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
                        placeholder="Sua nota (Somente inteiros de 0 a 5)"
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
                        onChange={e => setNewTag(e.target.value)}
                        value={newTag}
                        onClick={handleAddTags}
                    />
                </div>

                <div className="buttons">
                    <Button title="Excluir filme"/>
                    <Button 
                        title="Salvar alterações" 
                        onClick={handleNewNote}
                    />
                </div>
            </main>
        </Container>
    )
}