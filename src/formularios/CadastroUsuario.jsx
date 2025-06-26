import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';

const CadastroUsuario = () => {

  const coordenador = true; // Altera o nome do botão se verdadeiro

  const [tipoUsuario, setTipoUsuario] = useState('');

  function rotaParaLogin(e) {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      window.location.href = "/login";
    } else {
      form.reportValidity();
    }
  }

  const handleTipoUsuarioChange = (e) => {
    setTipoUsuario(e.target.value);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card className="shadow p-4" style={{ width: "100%", maxWidth: "500px" }}>
        <h3 className="text-center mb-4">Formulário de Cadastro</h3>

        <Form onSubmit={rotaParaLogin}>

          {/* Matrícula ou SIAPE */}
          {tipoUsuario === "professor" ? (
            <Form.Group className="mb-3" controlId="siape">
              <Form.Label>SIAPE</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu SIAPE"
                required
              />
            </Form.Group>
          ) : (
            <Form.Group className="mb-3" controlId="matricula">
              <Form.Label>Matrícula</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite sua matrícula"
                required
              />
            </Form.Group>
          )}

          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite seu nome"
              required
            />
          </Form.Group>

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
          </Form.Group>

          {/* Área de Atuação (somente para professor) */}
          {tipoUsuario === "professor" && (
            <Form.Group className="mb-3" controlId="area">
              <Form.Label>Área de Atuação</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite sua área de atuação"
                required
              />
            </Form.Group>
          )}

          {/* Tipo de usuário */}
          <Form.Group className="mb-4">
            <Form.Label>Tipo de usuário</Form.Label>
            <div className="d-flex gap-4">
              <Form.Check
                type="radio"
                label="Aluno"
                name="tipoUsuario"
                id="aluno"
                value="aluno"
                onChange={handleTipoUsuarioChange}
                checked={tipoUsuario === "aluno"}
                disabled={coordenador}
                required
              />
              <Form.Check
                type="radio"
                label="Professor"
                name="tipoUsuario"
                id="professor"
                value="professor"
                onChange={handleTipoUsuarioChange}
                checked={tipoUsuario === "professor"}
                required
              />
            </div>
          </Form.Group>

          {/* Permissão (somente para professor) */}
          {tipoUsuario === "professor" && (
            <Form.Group className="mb-4">
              <Form.Label>Permissão</Form.Label>
              <div className="d-flex gap-4">
                <Form.Check
                  type="radio"
                  label="Orientador"
                  name="permissao"
                  id="orientador"
                  value="orientador"
                  required
                />
                <Form.Check
                  type="radio"
                  label="Coordenador"
                  name="permissao"
                  id="coordenador"
                  value="coordenador"
                  required
                />
              </div>
            </Form.Group>
          )}

          <Button type="submit" variant="primary" className="w-100">
            {coordenador ? "Salvar" : "Entrar"}
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default CadastroUsuario;
