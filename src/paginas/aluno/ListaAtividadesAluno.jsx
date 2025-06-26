import React from 'react';
import NavBar from '../../componentes/NavBar';
import { Container, Card, ListGroup, Badge, Alert } from 'react-bootstrap';
import { useAppContext } from '../../context/AppContext';

const ListaAtividadesAluno = () => {

    const { user, setUser } = useAppContext()

    function rotaParaEntrarNaAtividadeAluno(e) {
        e.preventDefault();
        window.location.href = "/adicionarTrabalhoDoTcc";
    }

    return (
        <Container fluid className="bg-light d-flex justify-content-center" style={{ padding: "60px 20px" }}>
            <Card className="shadow p-4 w-100" style={{ maxWidth: "1100px", borderRadius: "12px" }}>
                <NavBar user={user} />

                <Container className="my-4" style={{ maxWidth: "700px" }}>
                    <h2 className="mb-4">Atividades</h2>

                    {user.trabalhoAcademico.listaAtividades === null ? (
                        <Alert variant="info" className="text-center">
                            Nenhuma atividade foi cadastrada ainda. Aguarde o orientador adicionar.
                        </Alert>
                    ) : (
                        <ListGroup>
                            {user.trabalhoAcademico.listaAtividades.map((atividade) => (
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
