import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';

const Login = () => {

  function rotaParaEntrar(e) {
    e.preventDefault();

    const form = e.target;
    if (form.checkValidity()) {
      window.location.href = "/atividadeDoAluno";
    } else {
      form.reportValidity();
    }
  }

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card className="shadow p-4" style={{ width: "100%", maxWidth: "500px" }}>
        <h3 className="text-center mb-4">Login</h3>

        <Form onSubmit={rotaParaEntrar}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="senha">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite sua senha"
              required
              minLength={6}
            />
            <div className="text-center mt-2">
              <a href="/cadastro">Esqueceu a senha?</a>
            </div>
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100">
            Entrar
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
