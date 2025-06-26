import React, { useEffect, useState } from "react";
import NavBar from "../../componentes/NavBar";
import { Button, Modal, Card, Container, Row, Col } from "react-bootstrap";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const PrincipalDoAluno = () => {

    const { user, setUser } = useAppContext();
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const confirmarExclusao = () => {
        alert("Item excluído!");
        handleClose();
    };

    const rotaParaCadastrarTCC = (e) => {
        e.preventDefault();
        navigate("/cadastroTCC");
    };

    const rotaParaEntrarNoTCC = (e) => {
        e.preventDefault();
        navigate("/listaAtividadesAluno");
    };

    useEffect(() => {
        setUser(user)
    },[])

    return (
        <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <Card className="shadow p-4 w-100" style={{ maxWidth: "1000px", minHeight: "550px" }}>
                <NavBar user={user} />

                {user.trabalhoAcademico ? (
                    <div>
                        <h3 className="text-center mb-4 mt-4">Meu trabalho Acadêmico</h3>

                        <Card className="mx-auto shadow-sm" style={{ backgroundColor: "#e6f4ff", maxWidth: "500px", border: "1px solid #cce6ff", borderRadius: "12px", padding: "20px" }}>
                            <Card.Body>
                                <Card.Title className="mb-3" style={{ fontWeight: "600", color: "#333" }}>
                                    {user.trabalhoAcademico.tema}
                                </Card.Title>

                                <Card.Text className="mb-2">
                                    <strong>Orientador:</strong> {user.trabalhoAcademico.orientador.nome}
                                </Card.Text>
                                <Card.Text className="mb-4">
                                    <strong>Data de criação:</strong> {user.trabalhoAcademico.dataCriacao}
                                </Card.Text>

                                <Row className="mt-4">
                                    {/* <Col>
                                         <Button
                                            variant="danger"
                                            className="w-100"
                                            onClick={handleShow}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = "#c0392b";
                                                e.target.style.boxShadow = "0 6px 14px rgba(192, 57, 43, 0.6)";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = "#dc3545";
                                                e.target.style.boxShadow = "0 4px 10px rgba(220, 53, 69, 0.4)";
                                            }}
                                            style={{
                                                fontWeight: "600",
                                                boxShadow: "0 4px 10px rgba(220, 53, 69, 0.4)",
                                                transition: "background-color 0.3s ease, box-shadow 0.3s ease"
                                            }}
                                        >
                                            Excluir
                                        </Button> 
                                    </Col> */}
                                    <Col>
                                        <Button
                                            variant="primary"
                                            className="w-100"
                                            onClick={rotaParaEntrarNoTCC}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = "#357ABD";
                                                e.target.style.boxShadow = "0 6px 14px rgba(53,122,189,0.6)";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = "#0d6efd";
                                                e.target.style.boxShadow = "0 4px 10px rgba(13,110,253,0.4)";
                                            }}
                                            style={{
                                                fontWeight: "600",
                                                boxShadow: "0 4px 10px rgba(13,110,253,0.4)",
                                                transition: "background-color 0.3s ease, box-shadow 0.3s ease"
                                            }}
                                        >
                                            Acessar
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        {/* Modal de Confirmação */}
                        <Modal show={show} onHide={handleClose} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Confirmação</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Tem certeza que deseja excluir?</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Cancelar
                                </Button>
                                <Button variant="danger" onClick={confirmarExclusao}>
                                    Confirmar
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                ) : (
                    <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center">
                        <h1 className="text-center mb-4">Bem-vindo(a), {user.nome}</h1>
                        <p className="text-center" style={{ fontSize: "25px" }}>
                            Cadastre seu trabalho de conclusão de curso
                        </p>
                        <Button variant="primary" size="lg" className="mt-4" onClick={rotaParaCadastrarTCC} style={{ width: "300px" }}>
                            Cadastrar
                        </Button>
                    </div>
                )}
            </Card>
        </Container>
    );
};

export default PrincipalDoAluno;
