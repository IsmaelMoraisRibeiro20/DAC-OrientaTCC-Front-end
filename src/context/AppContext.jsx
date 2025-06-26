import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [user, setUser] = useState();

    useEffect(() => {
        const usuario = {
            matricula: "111111111111",
            nome: "Emerson",
            trabalhoAcademico: null,
            //{
            //     titulo: "Inteligencia Artificial",
            //     orientador: {
            //         nome: "Ana",
            //         siape: "2222222",
            //     },
            //     dataCriacao: "26/06/2025",
            //     listaAtividades: [
            //         {
            //             id: 1,
            //             titulo: "Atividade 1: Introdução ao React",
            //             descricao: "Leia os conceitos básicos e crie seu primeiro componente.",
            //             dataEntrega: "2025-06-25",
            //             entregue: false,
            //         },
            //         {
            //             id: 1,
            //             titulo: "Atividade 1: Introdução ao React",
            //             descricao: "Leia os conceitos básicos e crie seu primeiro componente.",
            //             dataEntrega: "2025-06-25",
            //             entregue: false,
            //         },
            //     ]
            // },
            tipo: "Aluno"
        };

        setUser(usuario);
    }, []);

    return (
        <AppContext.Provider value={{ user, setUser }}>
            {children}
        </AppContext.Provider>
    );

};


export const useAppContext = () => useContext(AppContext);