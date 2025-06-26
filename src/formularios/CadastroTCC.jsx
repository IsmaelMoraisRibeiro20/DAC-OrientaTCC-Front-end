import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { useAppContext } from '../context/AppContext';

const CadastroTcc = () => {

  const navigate = useNavigate();
  const { user, setUser } = useAppContext();

  const [tema, setTema] = useState("");
  const [siape, setSiape] = useState("");

  function buttonVoltar() {
    navigate('/principalDoAluno');
  }

  function rotaParaCadastrar(e) {
    e.preventDefault();

    if (tema && siape) {
      setUser({
        ...user,
        trabalhoAcademico: {
          tema: tema,
          orientador: {
            nome: "Ana",
            siape: siape,
          },
          dataCriacao: new Date().toLocaleDateString('pt-BR'),
          listaAtividades: [
            {
              id: 1,
              titulo: "Atividade 1: Introdução ao React",
              descricao: "Leia os conceitos básicos e crie seu primeiro componente.",
              dataEntrega: "2025-06-25",
              entregue: false,
            }
          ],
        }
      });
      console.log(user)
      navigate("/principalDoAluno")

    } else {
      alert("Preencha todos os campos");
    }
  }

  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Card style={{ width: "100%", maxWidth: "700px" }} className="shadow">
        <Card.Body className="d-flex flex-column justify-content-center" style={{ height: "550px" }}>
          <h3 className="text-center mb-4">Cadastrar TCC</h3>

          <Form onSubmit={rotaParaCadastrar}>
            <Form.Group className="mb-3" controlId="tema">
              <Form.Label>Tema</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o tema do TCC"
                onChange={(e) => setTema(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="siape">
              <Form.Label>Orientador SIAPE</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o SIAPE"
                minLength={7}
                onChange={(e) => setSiape(e.target.value)}
                required
              />
            </Form.Group>

            <Row className="justify-content-between">
              <Col xs={12} md={5}>
                <Button variant="secondary" className="w-100" onClick={buttonVoltar}>
                  Voltar
                </Button>
              </Col>
              <Col xs={12} md={5}>
                <Button type="submit" variant="primary" className="w-100" id="cadastrar">
                  Cadastrar
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CadastroTcc;
