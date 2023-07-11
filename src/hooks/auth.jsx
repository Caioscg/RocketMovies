// centralizar os dados do usuário em 1 lugar
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({})

function AuthProvider({ children }) {  // o children são todas as rotas da aplicação
    const [data, setData] = useState("")

    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password })
            const { user, token } = response.data

            localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
            localStorage.setItem("@rocketmovies:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`  // aplica o token para todas no cabeçalho de todas requisições desse user

            setData({ user, token })

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível entrar.")
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@rocketmovies:user")
        localStorage.removeItem("@rocketmovies:token")

        setData({})  // objeto vazio, pra levar pro AuthRoutes
    }

    async function updateProfile({ user }) {

        try {
            await api.put("/users", user)
            localStorage.setItem("@rocketmovies:user", JSON.stringify(user))

            setData({ user, token: data.token })
            alert("Perfil atualizado.")

        } catch(error) {
            if(error.response) {
                alert(error.response.data.message)
            }
            else {
                alert("Não foi possível atualizar o perfil.")
            }
        }
    }

    useEffect(() => {
        const user = localStorage.getItem("@rocketmovies:user")
        const token = localStorage.getItem("@rocketmovies:token")

        if (user && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({
                user: JSON.parse(user),
                token
            })
        }

    }, [])  // executa o useEffect apenas quando a pág é renderizada

    return(
        <AuthContext.Provider value={{
            signIn,
            signOut,
            updateProfile,
            user: data.user
        }}>
            {children}
        </AuthContext.Provider>
    )   
}

function useAuth() {
    const context = useContext(AuthContext)  // inicializa o contexto que ta no AuthProvider

    return context  // essa variavel contém o conteudo dentro do value do context
}

export { AuthProvider, useAuth }