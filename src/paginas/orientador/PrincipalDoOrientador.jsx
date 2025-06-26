import React, { useState } from 'react';
import NavBar from '../../componentes/NavBar';
import { Button, Modal, Container, Card, Form } from 'react-bootstrap';

const PrincipalDoOrientador = () => {
    const [show, setShow] = useState(false);
    const [tccSelecionado, setTccSelecionado] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (tcc) => {
        setTccSelecionado(tcc);
        setShow(true);
    };

    const confirmarExclusao = () => {
        alert(`Item excluído: ${tccSelecionado?.titulo}`);
        handleClose();
    };

    function rotaParaEntrarNaAtividadeOrientador(e) {
        e.preventDefault();
        window.location.href = "/listaAtividadesOrientador";
    }

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
        {
            id: 4,
            titulo: "Outro Trabalho Adicional",
            aluno: "Maria",
            dataCriacao: "2024-05-15",
        },
        {
            id: 5,
            titulo: "Mais um Trabalho",
            aluno: "José",
            dataCriacao: "2024-06-01",
        },
        {
            id: 5,
            titulo: "Mais um Trabalho",
            aluno: "José",
            dataCriacao: "2024-06-01",
        },
        {
            id: 5,
            titulo: "Mais um Trabalho",
            aluno: "José",
            dataCriacao: "2024-06-01",
        },
        {
            id: 5,
            titulo: "Mais um Trabalho",
            aluno: "José",
            dataCriacao: "2024-06-01",
        },
    ];

    return (
        <Container
            fluid
            className="bg-light d-flex justify-content-center align-items-center"
            style={{ minHeight: '100vh' }}
        >
            <Card
                className="shadow p-4"
                style={{
                    maxWidth: '1000px',
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <NavBar />

                {tccs.length > 0 ? (
                    <>
                        <h2 className="text-center mb-4" style={{ color: "#333", fontWeight: 600 }}>
                            Trabalhos de Conclusão de Curso
                        </h2>

                        <Form.Group className="mb-3 w-50 mx-auto">
                            <Form.Control
                                type="text"
                                placeholder="Digite o nome do trabalho ou do aluno"
                            />
                        </Form.Group>

                        {/* Container de scroll vertical */}
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',           // permite múltiplas linhas
                                gap: '15px',
                                width: '725px',
                                maxHeight: '450px',         // altura fixa para scroll vertical
                                overflowY: 'auto',          // scroll vertical
                                margin: '0 auto',
                                paddingRight: '10px',       // evita scrollbar sobre os cards
                                boxSizing: 'border-box',
                            }}
                            className="scrollbar"
                        >
                            {tccs.map((tcc) => (
                                <Card
                                    key={tcc.id}
                                    className="shadow-sm"
                                    style={{
                                        backgroundColor: "#e6f4ff",
                                        borderRadius: "10px",
                                        padding: "15px",
                                        border: "1px solid #cce6ff",
                                        cursor: "default",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        flex: '0 0 220px',       // largura fixa sem encolher ou crescer
                                        height: "200px",         // altura fixa dos cards
                                        boxSizing: 'border-box',
                                    }}
                                >
                                    <Card.Title style={{
                                        fontWeight: 600,
                                        color: "#333",
                                        fontSize: "1rem",
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        lineHeight: '1.2em',
                                        maxHeight: '2.4em', // 2 linhas de altura
                                    }}>
                                        {tcc.titulo}
                                    </Card.Title>
                                    <Card.Text style={{ fontSize: "0.9rem", color: "#555", marginBottom: "4px" }}>
                                        <strong>Aluno:</strong> {tcc.aluno || "Não informado"}
                                    </Card.Text>
                                    <Card.Text style={{ fontSize: "0.85rem", color: "#666" }}>
                                        <strong>Criado em:</strong> {new Date(tcc.dataCriacao).toLocaleDateString()}
                                    </Card.Text>

                                    <div className="d-flex gap-2 mt-3">
                                        <Button variant="danger" style={{ flex: 1 }} onClick={() => handleShow(tcc)}>
                                            Excluir
                                        </Button>
                                        <Button variant="primary" style={{ flex: 1 }} onClick={rotaParaEntrarNaAtividadeOrientador}>
                                            Acessar
                                        </Button>
                                    </div>
                                </Card>
                            ))}
                        </div>



                        <Modal show={show} onHide={handleClose} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Confirmação</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Tem certeza que deseja excluir <strong>{tccSelecionado?.titulo}</strong>?
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
                    </>
                ) : (
                    <div
                        className="d-flex flex-column justify-content-center align-items-center text-center"
                        style={{ minHeight: '300px', padding: '20px', borderRadius: '8px' }}
                    >
                        <h2 className="mb-3">Trabalhos de Conclusão de Curso</h2>
                        <p className="w-100" style={{ fontSize: "22px", color: "#6c757d", maxWidth: "600px" }}>
                            No momento você ainda não é orientador de um trabalho de conclusão de curso.
                        </p>
                    </div>
                )}
            </Card>
        </Container>
    );
};

export default PrincipalDoOrientador;
