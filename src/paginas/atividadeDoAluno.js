import React from "react";
import meuIcone from "../icones/usuario.png"

function atividadeDoAluno() {

    function rotaParaEntrar(e) {
        e.preventDefault();

        window.location.href = "/cadastroTCC";



    }

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
                    {/* NAVBAR  */}
                    <nav
                        className="navbar navbar-expand-lg w-100"
                        style={{
                           
                            padding: "0.75rem 1rem",
                            margin: 0,
                            borderRadiu: '10px'
                        }}
                    >
                        <div className="container-fluid d-flex justify-content-between align-items-center">
                            <h1 className="m-0">OrientaTCC</h1>

                            <div className="d-flex align-items-center">
                                

                                <h3 className="me-3 d-none d-md-block">Ana Maria</h3>

                                {/* Ícone com dropdown */}
                                <div className="dropdown">
                                    <img
                                        src={meuIcone}
                                        className="dropdown-toggle"
                                        role="button"
                                        id="dropdownMenuButton"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        style={{
                                            width: "60px",
                                            height: "60px",
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
                                        <li><a className="dropdown-item" href="/trabalhoAcademico">TrabalhoAcademico</a></li>
                                        <li><a className="dropdown-item" href="/login">Sair</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <hr style={{ border: "1px solid black", margin: "0 0 20px 0" }} />



                    {/* CONTEÚDO PRINCIPAL */}
                    <div className="flex-grow-1 d-flex flex-column justify-content-center">
                        <h1 className="text-center mb-4">Bem-vindo, Ana Maria</h1>
                        <p className="text-center w-100" style={{fontSize: "25px"}}>
                            Cadastre seu trabalho de conclusão de curso
                        </p>
                        <div className="text-center mt-4">
                            <button type="button" className="btn btn-primary btn-lg" onClick={rotaParaEntrar} style={{width:"300px"}}>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default atividadeDoAluno;
