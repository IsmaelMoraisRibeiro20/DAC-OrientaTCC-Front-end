import React from 'react'
import NavBar from '../../componentes/NavBar'

const ListaAtividadesOrientador = () => {

    const atividades = []

    function rotaParaEntrarNaAtividadeOrientador(e) {
        e.preventDefault();
        window.location.href = "/atividadeOrientador";
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

                    <div className="container my-4" style={{ maxWidth: "700px" }}>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h2 className="">Atividades</h2>
                            <button
                                style={{
                                    marginTop: "0",
                                    padding: "10px 20px",
                                    fontSize: "14px",
                                    borderRadius: "8px",
                                    border: "none",
                                    backgroundColor: "#4a90e2",
                                    color: "white",
                                    fontWeight: "600",
                                    boxShadow: "0 4px 10px rgba(74,144,226,0.4)",
                                    cursor: "pointer",
                                    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
                                    marginBottom: "0"
                                }}
                                onClick={rotaParaEntrarNaAtividadeOrientador}
                            >
                                Adicionar Atividade
                            </button>
                        </div>



                        {atividades.length === 0 ? (
                            <div
                                className="alert alert-info"
                                style={{
                                    marginTop: "10px",
                                    padding: "20px",
                                    borderRadius: "8px",
                                    backgroundColor: "#e9f5ff",
                                    color: "#31708f",
                                    border: "1px solid #bce8f1",
                                    textAlign: "center",
                                }}
                            >
                                Nenhuma atividade foi cadastrada ainda.
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
                                        // onClick={}
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

export default ListaAtividadesOrientador