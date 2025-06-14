import React from "react";
import meuIcone from "../icones/usuario.png";

function TrabalhoAcademico() {
    function rotaParaEntrar(e) {
        e.preventDefault();
        window.location.href = "/AdicionarTrabalhoDoTcc";
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
                <div
                    className="card shadow p-4"
                    style={{
                        width: "100%",
                        maxWidth: "600px",
                        height: "500px",
                        borderRadius: "12px"
                    }}
                >
                    {/* NAVBAR*/}
                    <div className="d-flex justify-content-between align-items-center mb-3" >
                        <h3 className="mb-0">OrientaTCC</h3>
                        <div className="d-flex align-items-center">
                            <span className="me-2" style={{ fontSize: "25px" }}>Ana Maria</span>
                            <div className="dropdown">
                                <img
                                    src={meuIcone}
                                    className="dropdown-toggle"
                                    role="button"
                                    id="dropdownMenuButton"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{
                                        width: "45px",
                                        height: "45px",
                                        borderRadius: "50%",
                                        cursor: "pointer",
                                        backgroundColor: "#e9f1ff", 
                                        padding: "4px"
                                    }}
                                />
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="dropdownMenuButton"
                                >
                                    <li><a className="dropdown-item" href="/atividadeDoAluno">Conta</a></li>
                                    <li><a className="dropdown-item" href="/login">Sair</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* LINHA DIVISÓRIA */}
                    <hr style={{ border: "1px solid black", margin: "0 0 20px 0" }} />

                    
                    <h3 className="text-center mb-4" style={{ marginTop: "38px" }}>Meu trabalho Acadêmico</h3>

                    {/* CARD DO TRABALHO */}
                    <div className="p-3 mb-4 rounded" style={{ backgroundColor: "#e6f4ff" }}>
                        <p className="mb-2">
                            <strong>Tema:</strong> a volta dos que não foram
                        </p>
                        <p className="mb-2">
                            <strong>Orientador:</strong> Damião
                        </p>
                        <p className="mb-0">
                            <strong>Data de criação:</strong> 18/02/2040
                        </p>
                    </div>

        
                    <button
                        onClick={rotaParaEntrar}
                        style={{
                            width: "100%",           
                            padding: "10px 0",       
                            fontSize: "16px",        
                            borderRadius: "8px",     
                            border: "none",
                            backgroundColor: "#4a90e2", // azul elegante
                            color: "white",
                            fontWeight: "600",
                            boxShadow: "0 4px 10px rgba(74,144,226,0.4)", // sombra azulada para destacar
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
        </>
    );
}

export default TrabalhoAcademico;
