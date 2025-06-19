import React, { useState } from "react";
import NavBar from "../../componentes/NavBar";
import { Button, Modal } from "react-bootstrap";

const PrincipalDoAluno = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const confirmarExclusao = () => {
        alert("Item excluído!");
        handleClose();
    };

    const atividade = true;


    function rotaParaCadastrarTCC(e) {
        e.preventDefault();
        window.location.href = "/cadastroTCC";
    }

    function rotaParaEntrarNoTCC(e) {
        e.preventDefault();
        window.location.href = "/listaAtividadesAluno";
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

                    <NavBar />

                    {atividade ? (
                        //Renderiza esse caso aluno TENHA atividade
                        <div>
                            <h3 className="text-center mb-4" style={{ marginTop: "38px" }}>
                                Meu trabalho Acadêmico
                            </h3>

                            {/* // CARD DO TRABALHO */}
                            <div
                                className="mx-auto shadow-sm"
                                style={{
                                    backgroundColor: "#e6f4ff",
                                    maxWidth: "500px",
                                    borderRadius: "12px",
                                    padding: "20px",
                                    border: "1px solid #cce6ff",
                                }}
                            >
                                <h5
                                    className="mb-3 text-start"
                                    style={{ fontWeight: "600", color: "#333" }}
                                >
                                    As redes de computadores no ensino universitário: um olhar para os campos virtuais.
                                </h5>

                                <p className="mb-2">
                                    <strong>Orientador:</strong> Damião
                                </p>
                                <p className="mb-3">
                                    <strong>Data de criação:</strong> 18/02/2040
                                </p>

                                <div className="d-flex justify-content-between mt-4">
                                    <button
                                        onClick={handleShow}
                                        style={{
                                            width: "200px",
                                            padding: "10px 0px",
                                            fontSize: "16px",
                                            borderRadius: "8px",
                                            border: "none",
                                            backgroundColor: "#e74c3c",
                                            color: "white",
                                            fontWeight: "600",
                                            boxShadow: "0 4px 10px rgba(231, 76, 60, 0.4)",
                                            cursor: "pointer",
                                            transition: "background-color 0.3s ease, box-shadow 0.3s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = "#c0392b";
                                            e.target.style.boxShadow =
                                                "0 6px 14px rgba(192, 57, 43, 0.6)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = "#e74c3c";
                                            e.target.style.boxShadow =
                                                "0 4px 10px rgba(231, 76, 60, 0.4)";
                                        }}
                                    >
                                        Excluir
                                    </button>

                                    <Modal show={show} onHide={handleClose} centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Confirmação</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            Tem certeza que deseja excluir?
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Cancelar
                                            </Button>
                                            <Button variant="danger" onClick={confirmarExclusao}>
                                                Confirmar
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>

                                    <button
                                        onClick={rotaParaEntrarNoTCC}
                                        style={{
                                            width: "200px",
                                            padding: "10px 0px",
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
                                        Acessar
                                    </button>
                                </div>
                            </div>
                        </div>


                    ) : (
                        //Renderiza esse caso aluno NAO tenha atividade
                        <div className="flex-grow-1 d-flex flex-column justify-content-center">
                            <h1 className="text-center mb-4">Bem-vindo, Ana Maria</h1>
                            <p className="text-center w-100" style={{ fontSize: "25px" }}>
                                Cadastre seu trabalho de conclusão de curso
                            </p>
                            <div className="text-center mt-4">
                                <button type="button" className="btn btn-primary btn-lg" onClick={rotaParaCadastrarTCC} style={{ width: "300px" }}>Cadastrar</button>
                            </div>
                        </div>
                    )}

                </div>
            </div >

        </>
    );
}

export default PrincipalDoAluno;
