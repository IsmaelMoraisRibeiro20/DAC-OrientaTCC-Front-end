import React from 'react'
import NavBar from '../../componentes/NavBar'

const ListaAtividadesAluno = () => {
    const atividades = [
        {
            id: 1,
            titulo: "Atividade 1: Introdução ao React",
            descricao: "Leia os conceitos básicos e crie seu primeiro componente.",
            dataEntrega: "2025-06-25",
            entregue: false,
        },
        {
            id: 2,
            titulo: "Atividade 2: Estados e Props",
            descricao: "Pratique estados e props em componentes funcionais.",
            dataEntrega: "2025-06-28",
            entregue: true,
        },
        {
            id: 3,
            titulo: "Atividade 3: Hooks",
            descricao: "Implemente useState e useEffect em um projeto simples.",
            dataEntrega: "2025-07-02",
            entregue: false,
        },
    ];

    function rotaParaEntrarNaAtividade(e) {
        e.preventDefault();
        window.location.href = "/adicionarTrabalhoDoTcc";
    }

    return (
        <>
            <div className="d-flex justify-content-center bg-light" style={{ padding: "60px 20px" }}>
                <div
                    className="card shadow p-4 w-100"
                    style={{
                        maxWidth: "1100px",
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: "12px",
                    }}
                >
                    <NavBar />
                    <hr style={{ border: "1px solid black", margin: "0 0 20px 0" }} />

                    <div className="container my-4" style={{ maxWidth: "700px" }}>
                        <h2 className="mb-4">Atividades</h2>

                        {atividades.length === 0 ? (
                            <div
                                className="alert alert-info"
                                style={{
                                    padding: "20px",
                                    borderRadius: "8px",
                                    backgroundColor: "#e9f5ff",
                                    color: "#31708f",
                                    border: "1px solid #bce8f1",
                                    textAlign: "center",
                                }}
                            >
                                Nenhuma atividade foi cadastrada ainda. Aguarde o professor adicionar.
                            </div>
                        ) : (
                            <ul className="list-group">
                                {atividades.map((atividade) => (
                                    <li
                                        key={atividade.id}
                                        className="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                                        style={{
                                            backgroundColor: "#f8f9fa",
                                            marginBottom: "12px",
                                            borderRadius: "6px",
                                            cursor: "pointer",
                                            transition: "background-color 0.3s",
                                        }}
                                        onClick={() => rotaParaEntrarNaAtividade(atividade.id)}
                                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e9ecef")}
                                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f8f9fa")}
                                    >
                                        <div className="flex-grow-1">
                                            <h5 className="mb-1">{atividade.titulo}</h5>
                                            <small>
                                                Data de entrega: {new Date(atividade.dataEntrega).toLocaleDateString()}
                                            </small>
                                        </div>

                                        <div className="text-end d-flex flex-column align-items-end">
                                            {!atividade.entregue && (
                                                <span
                                                    className="badge text-secondary"
                                                    style={{
                                                        backgroundColor: "transparent",
                                                        border: "1px transparent lightgray",
                                                        fontSize: "0.85rem",
                                                    }}
                                                >
                                                    Pendente
                                                </span>
                                                //colocar aqui o status da atividade
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}

export default ListaAtividadesAluno