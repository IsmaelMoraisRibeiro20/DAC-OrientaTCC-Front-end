import React from 'react'
import NavBar from '../../componentes/NavBar';

const PrincipalDoOrientador = () => {

    const tccs = [
        {
            id: 1,
            titulo: "As redes de computadores no ensino universitário: um olhar para os campos virtuais.",
            aluno: "Damião",
            dataCriacao: "2024-02-18",
        },
        {
            id: 2,
            titulo: "Inteligência Artificial na Educação: Desafios e Oportunidades.",
            aluno: "Damião",
            dataCriacao: "2024-03-05",
        },
        {
            id: 3,
            titulo: "Análise de Dados Aplicada ao Ensino Superior.",
            aluno: "Damião",
            dataCriacao: "2024-04-10",
        },
    ];

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
                    <hr style={{ border: "1px solid black", margin: "0 0 20px 0" }} />

                    {tccs.length > 0 ? (
                        <>
                            <h2
                                className="text-center mb-4"
                                style={{ color: "#333", fontWeight: "600" }}
                            >
                                Trabalhos de Conclusão de Curso
                            </h2>
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    justifyContent: "center",
                                    gap: "15px",
                                    overflowY: "auto",
                                    paddingRight: "10px",
                                }}
                            >
                                {tccs.map((tcc) => (
                                    <div
                                        key={tcc.id}
                                        className="shadow-sm"
                                        style={{
                                            backgroundColor: "#e6f4ff",
                                            borderRadius: "10px",
                                            padding: "15px",
                                            border: "1px solid #cce6ff",
                                            width: "calc(33% - 15px)",
                                            boxSizing: "border-box",
                                            cursor: "default",
                                            minHeight: "140px",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <h6
                                            className="mb-2 text-start"
                                            style={{ fontWeight: "600", color: "#333", fontSize: "1rem" }}
                                            title={tcc.titulo}
                                        >
                                            {tcc.titulo.length > 45
                                                ? tcc.titulo.slice(0, 42) + "..."
                                                : tcc.titulo}
                                        </h6>

                                        <p
                                            className="mb-1"
                                            style={{ fontSize: "0.9rem", color: "#555", marginBottom: "4px" }}
                                        >
                                            <strong>Aluno:</strong> {tcc.aluno || "Não informado"}
                                        </p>
                                        <p style={{ fontSize: "0.85rem", color: "#666" }}>
                                            <strong>Criado em:</strong>{" "}
                                            {new Date(tcc.dataCriacao).toLocaleDateString()}
                                        </p>
                                        <div className="d-flex justify-content-center ">
                                            <button
                                                style={{
                                                    width: "100%",       // ocupa toda a largura do card
                                                    marginTop: "10px",
                                                    padding: "10px 0",
                                                    fontSize: "14px",
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
                                                    e.target.style.boxShadow = "0 6px 14px rgba(53,122,189,0.6)";
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.backgroundColor = "#4a90e2";
                                                    e.target.style.boxShadow = "0 4px 10px rgba(74,144,226,0.4)";
                                                }}
                                            >
                                                Acessar
                                            </button>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="flex-grow-1 d-flex flex-column justify-content-start">
                            <div
                                className="d-flex flex-column justify-content-center align-items-center text-center"
                                style={{
                                    padding: "20px",
                                    borderRadius: "8px",
                                    minHeight: "300px",
                                }}
                            >
                                <h2 className="mb-3">Trabalhos de Conclusão de Curso</h2>
                                <p
                                    className="w-100"
                                    style={{
                                        fontSize: "22px",
                                        color: "#6c757d",
                                        maxWidth: "600px",
                                    }}
                                >
                                    No momento você ainda não é orientador de um trabalho de conclusão
                                    de curso.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}

export default PrincipalDoOrientador