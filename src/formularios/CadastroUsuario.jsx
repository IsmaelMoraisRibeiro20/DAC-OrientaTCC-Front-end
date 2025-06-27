import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CadastroUsuario = () => {

  const [siape, setSiape] = useState("");
  const [matricula, setMatricula] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [areaAtuacao, setAreaAtuacao] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [permissao, setPermissao] = useState("");

  const navigate = useNavigate();


  function rotaParaLogin(e) {
    e.preventDefault();

    const camposComuns = nome && email && senha && tipoUsuario;

    if (tipoUsuario === "aluno") {
      if (camposComuns && matricula) {
        const user = {
          matricula,
          nome,
          email,
          senha,
          tipoUsuario,
        };
        //persistir usuario antes de ser redirecionado
        navigate("/login");

      } else {
        alert("Preencha todos os campos");
      }

    } else if (tipoUsuario === "professor") {
      if (camposComuns && siape && areaAtuacao && permissao) {
        const user = {
          siape,
          nome,
          email,
          senha,
          areaAtuacao,
          tipoUsuario,
          permissao,
        };
        //persistir usuario antes de ser redirecionado
        navigate("/login");

      } else {
        alert("Preencha todos os campos obrigatórios para professor.");
      }

    } else {
      alert("Preencha todos os campos");
    }

  }

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
                onChange={(e) => setSiape(e.target.value)}
                required
              />
            </Form.Group>
          ) : (
            <Form.Group className="mb-3" controlId="matricula">
              <Form.Label>Matrícula</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite sua matrícula"
                onChange={(e) => setMatricula(e.target.value)}
                required
              />
            </Form.Group>
          )}

          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite seu nome"
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="senha">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite sua senha"
              onChange={(e) => setSenha(e.target.value)}
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
                onChange={(e) => setAreaAtuacao(e.target.value)}
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
                checked={tipoUsuario === "aluno"}
                onChange={(e) => setTipoUsuario(e.target.value)}
                required
              />
              <Form.Check
                type="radio"
                label="Professor"
                name="tipoUsuario"
                id="professor"
                value="professor"
                checked={tipoUsuario === "professor"}
                onChange={(e) => setTipoUsuario(e.target.value)}
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
                  checked={permissao === "orientador"}
                  onChange={(e) => setPermissao(e.target.value)}
                  required
                />
                <Form.Check
                  type="radio"
                  label="Coordenador"
                  name="permissao"
                  id="coordenador"
                  value="coordenador"
                  checked={permissao === "coordenador"}
                  onChange={(e) => setPermissao(e.target.value)}
                  required
                />
              </div>
            </Form.Group>
          )}

          <Button type="submit" variant="primary" className="w-100">
            Entrar
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default CadastroUsuario;
