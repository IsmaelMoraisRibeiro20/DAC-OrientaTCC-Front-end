import React from 'react'
import NavBar from '../../componentes/NavBar'
import { CiTrash } from 'react-icons/ci'

const GerenciarOrientador = () => {

    const professores = [
        {
            id: 1,
            nome: "Joao",
            siape: "1234567"
        },
        {
            id: 2,
            nome: "Ismael",
            siape: "10987654"
        },
    ]

    return (
        <>
            <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
                <div
                    className="card shadow p-4"
                    style={{
                        width: "100%",
                        maxWidth: "1000px",
                        height: "550px",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <NavBar />

                    <div className="container my-4" style={{ maxWidth: "700px" }}>
                        <h3 className="mb-4">Orientadores Cadastrados</h3>

                        <div className='d-flex '>
                            <input
                                type="text"
                                className="form-control w-50 me-0 mb-4"
                                placeholder="Digite o nome do orientador"
                            />

                            <button
                                onClick={() => window.location.href = "/cadastro"}
                                style={{
                                    width: "165px",
                                    padding: "5px 3px",
                                    marginBottom: "23px",
                                    marginLeft: "5px",
                                    fontSize: "16px",
                                    borderRadius: "8px",
                                    border: "none",
                                    backgroundColor: "#4a90e2",
                                    color: "white",
                                    fontWeight: "600",
                                    boxShadow: "0 4px 10px rgba(74,144,226,0.4)",
                                    cursor: "pointer",
                                    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "#357ABD";
                                    e.target.style.boxShadow =
                                        "0 6px 14px rgba(53,122,189,0.6)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "#4a90e2";
                                    e.target.style.boxShadow =
                                        "0 4px 10px rgba(74,144,226,0.4)";
                                }}
                            >
                                Adicionar Orientador
                            </button>

                        </div>


                        {professores.length === 0 ? (
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
                                Nenhum Orientador foi cadastrado ainda.
                            </div>
                        ) : (
                            <ul className="list-group">
                                {professores.map((professor) => (
                                    <li
                                        key={professor.id}
                                        className="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                                        style={{
                                            backgroundColor: "#f8f9fa",
                                            marginBottom: "12px",
                                            borderRadius: "6px",
                                            cursor: "pointer",
                                            transition: "background-color 0.3s",
                                        }}
                                        // onClick={rotaParaEntrarNaAtividadeAluno}
                                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e9ecef")}
                                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f8f9fa")}
                                        onClick={() => window.location.href = "/editarOrientador"}
                                    >
                                        <div className="flex-grow-1">
                                            <h5 className="mb-1">{professor.nome}</h5>
                                            <small>
                                                SIAPE: {professor.siape}
                                            </small>
                                        </div>

                                        <CiTrash
                                            size={23}
                                            style={{ color: "red" }}
                                            title='Remover Orientador'
                                            cursor={"pointer"}
                                        />
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

export default GerenciarOrientador