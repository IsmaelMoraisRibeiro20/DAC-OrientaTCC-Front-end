import React, { useRef, useState } from "react";
import NavBar from '../../componentes/NavBar';
import { CiTrash } from 'react-icons/ci';
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';

const AtividadeOrientador = () => {
    const comentariosAnteriores = [
        "Muito bom, ficou claro! ",
        "Adicione mais detalhes na descrição.",
    ];

    const arquivoRecebido = ["Teste.docx"];

    const [nomeAtividade, setNomeAtividade] = useState("Nome da Atividade");
    const [descricao, setDescricao] = useState(`Componham equipes considerando os softwares definidos nas disciplinas de Projeto I e Projeto II...`);
    const [dataEntrega, setDataEntrega] = useState("2025-06-20T23:59");
    const [status, setStatus] = useState("Em andamento");
    const [comentario, setComentario] = useState("");
    const [fileName, setFileName] = useState("");
    const [fileURL, setFileURL] = useState("");

    const fileInputRef = useRef(null);

    function handleFileSelect(event) {
        const files = event.target.files;
        if (files.length > 0) {
            setFileName(files[0].name);
            setFileURL(URL.createObjectURL(files[0]));
        }
    }

    function handleButtonClick() {
        fileInputRef.current.click();
    }

    function handleCancel() {
        setFileName(null);
        setFileURL(null);
        fileInputRef.current.value = null;
    }

    const getStatusTextColor = (status) => {
        if (status === "Pendente") return "orange";
        if (status === "Aprovado") return "green";
        return "black";
    };

    return (
        <Container fluid className="bg-light py-5 d-flex justify-content-center">
            <Card className="shadow p-4 w-100" style={{ maxWidth: "1100px", borderRadius: "12px" }}>
                <NavBar />

                <Row className="mt-4">
                    <Col md={8}>
                        <Card className="mb-3 p-3">
                            <Form>
                                <div className="d-flex justify-content-between flex-wrap">
                                    <div>
                                        <Form.Control
                                            type="text"
                                            value={nomeAtividade}
                                            onChange={(e) => setNomeAtividade(e.target.value)}
                                            style={{ fontSize: "1.8rem", fontWeight: "bold", border: "none" }}
                                        />
                                        <Form.Label className="fw-bold mt-2">Status:</Form.Label>
                                        <Form.Select
                                            value={status}
                                            onChange={(e) => setStatus(e.target.value)}
                                            style={{
                                                maxWidth: "200px",
                                                fontWeight: "600",
                                                color: getStatusTextColor(status)
                                            }}
                                        >
                                            <option value="Pendente" style={{ color: "orange" }}>Pendente</option>
                                            <option value="Aprovado" style={{ color: "green" }}>Avaliado</option>
                                            <option value="Em andamento" style={{ color: "black" }} >Em andamento</option>
                                        </Form.Select>
                                    </div>

                                    <div>
                                        <Form.Label className="fw-bold">Data de entrega:</Form.Label>
                                        <Form.Control
                                            type="datetime-local"
                                            value={dataEntrega}
                                            onChange={(e) => setDataEntrega(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <hr className="my-4" />

                                <Form.Control
                                    as="textarea"
                                    rows={8}
                                    value={descricao}
                                    onChange={(e) => setDescricao(e.target.value)}
                                    style={{ fontSize: "1.1rem" }}
                                />

                                <div className="mt-4">
                                    <Form.Label className="fw-bold fs-5">Adicionar comentário</Form.Label>

                                    <div className="bg-light p-3 mb-3 border rounded" style={{ maxHeight: "150px", overflowY: "auto" }}>
                                        {comentariosAnteriores.length > 0 ? (
                                            comentariosAnteriores.map((coment, index) => (
                                                <div key={index} className="d-flex justify-content-between align-items-center mb-2">
                                                    <span style={{ fontSize: "0.95rem" }}>{coment}</span>
                                                    <CiTrash size={22} color="red" title="Excluir comentário" style={{ cursor: "pointer" }} />
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-muted">Nenhum comentário ainda.</p>
                                        )}
                                    </div>

                                    <Form.Control
                                        as="textarea"
                                        rows={2}
                                        placeholder="Adicione um comentário"
                                        value={comentario}
                                        onChange={(e) => setComentario(e.target.value)}
                                    />

                                    <div className="text-end mt-2">
                                        <Button variant="primary">Adicionar comentário</Button>
                                    </div>
                                </div>
                            </Form>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="p-3 mb-3">
                            <Card.Title className="fs-4 fw-bold">Submeter Arquivos</Card.Title>

                            {fileName && (
                                <div className="mt-3 d-flex align-items-center gap-2">
                                    <strong>Arquivo:</strong>
                                    <a href={fileURL} target="_blank" rel="noopener noreferrer" className="text-primary">
                                        {fileName}
                                    </a>
                                    <Button variant="link" onClick={handleCancel} className="text-danger p-0">
                                        <CiTrash size={22} />
                                    </Button>
                                </div>
                            )}

                            <div className="d-grid gap-2 mt-4">
                                <Button variant="outline-primary" onClick={handleButtonClick}>
                                    + Adicionar ou criar
                                </Button>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: "none" }}
                                    onChange={handleFileSelect}
                                    accept=".pdf"
                                />
                                <Button variant="primary" onClick={() => setStatus("Concluído")}>Marcar como concluído</Button>
                            </div>
                        </Card>

                        <Card className="p-3">
                            <Card.Title className="fs-4 fw-bold">Arquivos Recebidos</Card.Title>

                            {arquivoRecebido.length > 0 ? (
                                arquivoRecebido.map((arquivo, index) => (
                                    <div key={index} className="d-flex justify-content-between align-items-center mb-2">
                                        <a href="#" className="text-primary text-decoration-underline" style={{ flex: 1 }}>
                                            {arquivo}
                                        </a>
                                        <Button variant="link" className="text-danger p-0">
                                            <CiTrash size={20} />
                                        </Button>
                                    </div>
                                ))
                            ) : (
                                <p className="text-muted">Nenhum arquivo recebido ainda.</p>
                            )}
                        </Card>

                        <div className="text-end mt-3">
                            <Button style={{ backgroundColor: "#4a90e2", border: "none" }}>Salvar Atividade</Button>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default AtividadeOrientador;
