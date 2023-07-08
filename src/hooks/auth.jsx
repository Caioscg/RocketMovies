// centralizar os dados do usuário em 1 lugar
import { createContext, useContext, useEffect } from "react";

export const AuthContext = createContext({})

function AuthProvider({ children }) {  // o children são todas as rotas da aplicação
    return(
        <AuthContext.Provider value={{
            name: "Caio",
            email: "Caio@email.com"
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