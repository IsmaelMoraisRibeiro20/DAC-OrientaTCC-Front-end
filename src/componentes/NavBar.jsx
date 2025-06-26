import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { BsPersonCircle } from 'react-icons/bs';

const NavBar = ({ user }) => {

    const [hover, setHover] = useState(false);

    return (
        <>
            <div className="navbar navbar-expand-lg w-100" style={{ padding: "0.75rem 1rem", margin: 0, borderRadius: '10px' }}>
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <a
                        href="/principalDoAluno"
                        className="m-0"
                        style={{ textDecoration: 'none', color: 'black' }}
                    >
                        <h1
                            className="m-0"
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            style={{
                                textDecoration: hover ? 'underline' : 'none',
                                transition: '0.2s ease',
                            }}
                        >
                            OrientaTCC
                        </h1>
                    </a>

                    <div className="d-flex align-items-center">
                        <h3 className="me-3 d-none d-md-block">{user.nome}</h3>


                        <NavDropdown title={<BsPersonCircle size={45} color="#6c757d" />} id="nav-dropdown" align="end">
                            {user.tipo === "coordenador" && (
                                <>
                                    <NavDropdown.Item href="/listarOrientador">Gerenciar Orientadores</NavDropdown.Item>
                                    <NavDropdown.Item href="/listarAluno">Listar Alunos</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                </>
                            )}
                            <NavDropdown.Item href="/login" style={{ color: "red" }}>Sair</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </div>
            </div>
            <hr style={{ border: "1px solid black", margin: "0 0 20px 0" }} />
        </>
    );
};

export default NavBar;
