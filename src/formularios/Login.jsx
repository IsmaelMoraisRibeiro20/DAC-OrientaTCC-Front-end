import React, { useState } from 'react';
import { Container, Card, Form, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import gerarSenha from '../util/geradorSenha';
import { pegarAlunoId } from '../services/alunoService';
import { useAppContext } from '../context/AppContext';

const Login = () => {

  const { setUser } = useAppContext()

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [emailRecuperacao, setEmailRecuperacao] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const recuperacaoDeSenha = (e) => {
    e.preventDefault();

    if (emailRecuperacao) {
      alert("Nova senha enviadada");
      const novaSenha = gerarSenha();
      console.log(novaSenha);
      handleClose();
      //procurar api para mandar email com nova senha(emailjs parece nao esta funcionando)
      //atualizar usuarioo para que el  consiga entrar com a senha nva

    } else {
      alert("Preencha o campo de email");
    }

  };

  const rotaParaEntrar = async (e) => {
    e.preventDefault();

    if (email && senha) {
      //Recuperar do banco usuario com esse email e senha para direcionalo para a pagina principal
      const usuario = await pegarAlunoId();
      setUser(usuario);

      if (usuario.matricula) {
        navigate("/principalDoAluno");

      } else {
        navigate("/principalDoOrientador");
      }


    } else {

      alert("Preencha todos os campos");
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
            <div className=" d-flex text-center justify-content-center mt-2">
              <p
                onClick={() => setShow(true)}
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  cursor: "pointer",
                  backgroundColor: "white",
                  width: "135px",
                  marginBottom: "0px"
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#357ABD";

                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#0d6efd";

                }}
              >
                Esqueceu a senha?
              </p>
            </div>
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100">
            Entrar
          </Button>
        </Form>
      </Card>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Recuperar Senha</Modal.Title>
        </Modal.Header>

        <Form onSubmit={recuperacaoDeSenha}>
          <Modal.Body>
            <Form.Group controlId='email'>
              <Form.Label className='mb-3'>
                Informe seu <strong>e-mail</strong> para receber uma nova senha
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                onChange={(e) => setEmailRecuperacao(e.target.value)}
                required
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="danger" type="submit">
              Confirmar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default Login;
