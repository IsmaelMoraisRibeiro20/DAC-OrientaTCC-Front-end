import { useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';

const CadastroTcc = () => {
  const navegar = useNavigate();

  function buttonVoltar() {
    navegar('/principalDoAluno');
  }

  function rotaParaCadastrar(e) {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      window.location.href = "/trabalhoAcademico";
    } else {
      form.reportValidity();
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
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="siape">
              <Form.Label>Orientador SIAPE</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o SIAPE"
                required
                minLength={7}
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
