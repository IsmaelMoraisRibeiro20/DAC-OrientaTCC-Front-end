import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';

const EditarOrientador = () => {
  const orientadorInicial = {
    id: 1,
    nome: "Andrey",
    siape: "123",
    areaAtuacao: "IA",
    permissao: "coordenador",
    email: "a@a",
    senha: "13579",
    tipoUsuario: "professor",
  };

  const [orientador, setOrientador] = useState(orientadorInicial);

  function rotaParaLogin(e) {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity()) {
      window.location.href = "/login";
    } else {
      form.reportValidity();
    }
  }

  function handleChange(e) {
    const { id, value } = e.target;
    setOrientador(prev => ({ ...prev, [id]: value }));
  }

  function handleTipoUsuarioChange(e) {
    setOrientador(prev => ({ ...prev, tipoUsuario: e.target.value }));
  }

  function handlePermissaoChange(e) {
    setOrientador(prev => ({ ...prev, permissao: e.target.value }));
  }

  return (
    <Container 
      fluid
      className="d-flex justify-content-center align-items-center vh-100 bg-light"
    >
      <Card style={{ maxWidth: '500px', width: '100%' }} className="p-4 shadow">
        <h3 className="text-center mb-4">Editar Orientador</h3>

        <Form noValidate onSubmit={rotaParaLogin}>

          <Form.Group className="mb-3" controlId="siape">
            <Form.Label>SIAPE</Form.Label>
            <Form.Control 
              type="text" 
              value={orientador.siape} 
              disabled 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome</Form.Label>
            <Form.Control 
              type="text" 
              value={orientador.nome} 
              onChange={handleChange}
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              value={orientador.email} 
              onChange={handleChange}
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="senha">
            <Form.Label>Senha</Form.Label>
            <Form.Control 
              type="password" 
              value={orientador.senha} 
              onChange={handleChange}
              minLength={6}
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="areaAtuacao">
            <Form.Label>Área de Atuação</Form.Label>
            <Form.Control 
              type="text" 
              value={orientador.areaAtuacao} 
              onChange={handleChange}
              required 
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="d-block">Tipo de usuário</Form.Label>
            <Form.Check 
              inline 
              label="Professor" 
              name="tipoUsuario" 
              type="radio" 
              id="professor" 
              value="professor" 
              checked={orientador.tipoUsuario === 'professor'}
              onChange={handleTipoUsuarioChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="d-block">Permissão</Form.Label>
            <Form.Check 
              inline 
              label="Orientador" 
              name="permissao" 
              type="radio" 
              id="orientador" 
              value="orientador" 
              checked={orientador.permissao === 'orientador'}
              onChange={handlePermissaoChange}
              required
            />
            <Form.Check 
              inline 
              label="Coordenador" 
              name="permissao" 
              type="radio" 
              id="coordenador" 
              value="coordenador" 
              checked={orientador.permissao === 'coordenador'}
              onChange={handlePermissaoChange}
              required
            />
          </Form.Group>

          <Button type="submit" className="w-100" variant="primary">
            Salvar
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default EditarOrientador;
