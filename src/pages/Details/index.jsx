import { Header } from "../../components/Header"
import { Link } from "../../components/Link"
import { Star } from "../../components/Star"
import { Tags } from "../../components/Tags"

import { FiArrowLeft } from "react-icons/fi"
import { AiOutlineClockCircle } from "react-icons/ai"

import { Container, Title, Infos } from "./styles"

import { api } from "../../services/api"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../../hooks/auth"

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
 
export function Details() {
    const [data, setData] = useState(null)

    const { user } = useAuth()

    const params = useParams()
    const navigate = useNavigate()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    function handleBack() {
        navigate(-1)
    }

    async function handleRemoveNote() {
        const confirmation = window.confirm("Deseja realmente remover a nota?")

        if (confirmation) {
            await api.delete(`/notes/${params.id}`)
            handleBack()
        }
    }

    useEffect(() => {
        async function fetchNote() {
            const response = await api.get(`/notes/${params.id}`)  // faz um get na nota
            setData(response.data)
        }
        fetchNote()
    }, [])
    
    return (
        <Container>
            <Header />
                {
                    data &&
                    <main>
                    <Link content="Voltar" icon={FiArrowLeft} onClick={handleBack}/>

                    <div className="head">
                        <Title>
                            <h2>{data.title}</h2>
                            <Star size="20" number={data.rating} />
                        </Title>
                        <Link content="Excluir nota" onClick={handleRemoveNote}/>
                    </div>

                    <Infos>
                        <div className="user">
                            <img src={avatarUrl} alt={user.name} />
                            <span>Por {user.name}</span>
                        </div>
                        <div className="time">
                            <span><AiOutlineClockCircle /></span>
                            <span>
                                {
                                    data.create_at.replace(" ", " às ")
                                }
                            </span>
                        </div>
                    </Infos>

                    {
                        data.tags &&
                        <div className="tags">
                            {
                                data.tags.map(tag => (
                                    <Tags 
                                        key={String(tag.id)}
                                        title={tag.name}
                                    />
                                ))
                            }
                        </div>
                    }

                    <div className="text">
                        <p>
                            {data.description}
                        </p>
                    </div>
                </main>
            }
        </Container>
        
    )
}