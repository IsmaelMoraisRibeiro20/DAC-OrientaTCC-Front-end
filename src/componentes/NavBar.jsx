import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'

const NavBar = () => {

    return (
        <>

            <div
                className="navbar navbar-expand-lg w-100"
                style={{
                    padding: "0.75rem 1rem",
                    margin: 0,
                    borderRadius: '10px'
                }}
            >
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <a
                        href="/principalDoAluno"
                        className="m-0"
                        style={{ textDecoration: 'none', color: 'black' }}
                        onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
                        onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
                    >
                        <h1 className="m-0">OrientaTCC</h1>{/*Verificaar o usuario para mandalo para a tela adequaada*/}
                    </a>

                    <div className="d-flex align-items-center">


                        <h3 className="me-3 d-none d-md-block">Ana Maria</h3>

                        {/* Ícone com dropdown */}
                        <div className="dropdown">
                            <div
                                className="d-flex justify-content-center align-items-center"
                                role="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{
                                    width: "60px",
                                    height: "60px",
                                    borderRadius: "50%",
                                    cursor: "pointer",
                                    backgroundColor: "#e9f1ff",
                                }}
                            >
                                <BsPersonCircle size={45} color="#6c757d" />
                            </div>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <li><a className="dropdown-item" href="/login">Sair</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ border: "1px solid black", margin: "0 0 20px 0" }} />
        </>
    )

}

export default NavBar