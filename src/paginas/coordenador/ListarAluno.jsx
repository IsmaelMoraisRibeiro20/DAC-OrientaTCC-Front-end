import React from 'react';
import NavBar from '../../componentes/NavBar';
import { CiTrash } from 'react-icons/ci';
import {
    Container,
    Row,
    Col,
    Card,
    ListGroup,
    Alert,
    Form,
} from 'react-bootstrap';

const ListarAluno = () => {
    const alunos = [
        { id: 1, nome: 'Andrey', matricula: '12345678910' },
        { id: 2, nome: 'Ana', matricula: '10987654321' },
    ];

    return (
        <Container
            fluid
            className="bg-light d-flex justify-content-center align-items-center min-vh-100"
        >
            <Card className="shadow p-4 w-100" style={{ maxWidth: '1000px' }}>
                <NavBar />

                <div className="my-4 mx-auto" style={{ width: "700px" }}>
                    <Row className="align-items-end mb-4">
                        <Col>
                            <h3>Alunos Cadastrados</h3>
                        </Col>
                        <Col md={6}>
                            <Form.Control
                                type="text"
                                placeholder="Digite o nome do aluno"
                            />
                        </Col>
                    </Row>

                    {alunos.length === 0 ? (
                        <Alert
                            variant="info"
                            className="text-center"
                            style={{
                                padding: '20px',
                                borderRadius: '8px',
                                backgroundColor: '#e9f5ff',
                                color: '#31708f',
                                border: '1px solid #bce8f1',
                            }}
                        >
                            Nenhum aluno foi cadastrado ainda.
                        </Alert>
                    ) : (
                        <ListGroup>
                            {alunos.map((aluno) => (
                                <ListGroup.Item
                                    key={aluno.id}
                                    className="d-flex justify-content-between align-items-center"
                                    style={{
                                        backgroundColor: '#f8f9fa',
                                        marginBottom: '12px',
                                        borderRadius: '6px',
                                        transition: 'background-color 0.3s',
                                    }}
                                >
                                    <div>
                                        <h5 className="mb-1">{aluno.nome}</h5>
                                        <small>Matrícula: {aluno.matricula}</small>
                                    </div>
                                    <CiTrash
                                        size={23}
                                        style={{ color: 'red', cursor: 'pointer' }}
                                        title="Remover Aluno"
                                    />
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </div>
            </Card>
        </Container>
    );
};

export default ListarAluno;
