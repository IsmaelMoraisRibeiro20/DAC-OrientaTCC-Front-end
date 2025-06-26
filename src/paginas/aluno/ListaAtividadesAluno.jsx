import React from 'react';
import NavBar from '../../componentes/NavBar';
import { Container, Card, ListGroup, Badge, Alert } from 'react-bootstrap';

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

    function rotaParaEntrarNaAtividadeAluno(e) {
        e.preventDefault();
        window.location.href = "/adicionarTrabalhoDoTcc";
    }

    return (
        <Container fluid className="bg-light d-flex justify-content-center" style={{ padding: "60px 20px" }}>
            <Card className="shadow p-4 w-100" style={{ maxWidth: "1100px", borderRadius: "12px" }}>
                <NavBar />

                <Container className="my-4" style={{ maxWidth: "700px" }}>
                    <h2 className="mb-4">Atividades</h2>

                    {atividades.length === 0 ? (
                        <Alert variant="info" className="text-center">
                            Nenhuma atividade foi cadastrada ainda. Aguarde o professor adicionar.
                        </Alert>
                    ) : (
                        <ListGroup>
                            {atividades.map((atividade) => (
                                <ListGroup.Item
                                    key={atividade.id}
                                    action
                                    onClick={rotaParaEntrarNaAtividadeAluno}
                                    className="d-flex justify-content-between align-items-center flex-wrap"
                                    style={{
                                        borderRadius: "6px",
                                        marginBottom: "12px",
                                        backgroundColor: "#f8f9fa",
                                        transition: "background-color 0.3s",
                                    }}
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
                                            <Badge bg="light" text="secondary" className="border border-light">
                                                Pendente
                                            </Badge>
                                        )}
                                    </div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </Container>
            </Card>
        </Container>
    );
};

export default ListaAtividadesAluno;
