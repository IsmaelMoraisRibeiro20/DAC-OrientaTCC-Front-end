import React from "react";
import meuIcone from "../icones/usuario.png"

function trabalhoAcademico() {

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
                            backgroundColor: "#f5f3f4",
                            padding: "0.75rem 1rem",
                            margin: 0,
                            borderRadiu: '10px'
                        }}
                    >
                        <div className="container-fluid d-flex justify-content-between align-items-center">
                            <h3 className="m-0">OrientaTCC</h3>

                            <div className="d-flex align-items-center">
                                {/* Oculta o nome em telas pequenas */}
                                <h5 className="me-3 d-none d-md-block">Ana Maria</h5>

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
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%",
                                            cursor: "pointer",
                                            backgroundColor: "#e9f1ff", // mesma cor do navbar pra ficar uniforme
                                            padding: "4px"
                                        }}
                                    />
                                    <ul
                                        className="dropdown-menu dropdown-menu-end"
                                        aria-labelledby="dropdownMenuButton"
                                    >
                                        <li><a className="dropdown-item" href="/login">Conta</a></li>
                                        <li><a className="dropdown-item" href="/login">Sair</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>



                    {/* CONTEÚDO PRINCIPAL */}
                    <h2 style={{
                        marginTop: "30px",
                        textAlign: "center"
                    }}>Meu trabalho Academico</h2>

                    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                        <div className="card" style={{ width: "20rem", height: "20rem" }}>

                            <div style={{ backgroundColor: "blue", padding: "10px" }}>
                                <h4 className="card-title m-0">Tema: a volta dos que nao foram</h4>
                                <h5 style={{ marginTop: "10px" }}>Orientador: Damião</h5>
                            </div>

                            <div className="card-body">
                                <h6 style={{ marginTop: "20px" }}>Data de criação: 18/02/2040</h6>
                            </div>

                            <div className="text-center pb-3">
                                <button className="btn btn-primary">Acessar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default trabalhoAcademico;