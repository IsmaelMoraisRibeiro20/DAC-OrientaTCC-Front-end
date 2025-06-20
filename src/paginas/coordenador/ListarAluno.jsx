import React from 'react'
import NavBar from '../../componentes/NavBar'
import { CiTrash } from 'react-icons/ci'

const ListarAluno = () => {

    const alunos = [
        {
            id: 1,
            nome: "Andrey",
            matricula: "12345678910"
        },
        {
            id: 2,
            nome: "Ana",
            matricula: "10987654321"
        },
    ]


    return (
        <>
            <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
                <div
                    className="card shadow p-4"
                    style={{
                        width: "100%",
                        maxWidth: "1000px",
                        height: "550px",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <NavBar />

                    <div className="container my-4" style={{ maxWidth: "700px" }}>

                        <div className='d-flex justify-content-between'>
                            <h3 className="mb-4">Alunos Cadastrados</h3>

                            <input
                                type="text"
                                className="form-control w-50 me-0 mb-4"
                                placeholder="Digite o nome do aluno"
                            />
                        </div>


                        {alunos.length === 0 ? (
                            <div
                                className="alert alert-info"
                                style={{
                                    padding: "20px",
                                    borderRadius: "8px",
                                    backgroundColor: "#e9f5ff",
                                    color: "#31708f",
                                    border: "1px solid #bce8f1",
                                    textAlign: "center",
                                }}
                            >
                                Nenhuma aluno foi cadastrado ainda.
                            </div>
                        ) : (
                            <ul className="list-group">
                                {alunos.map((aluno) => (
                                    <li
                                        key={aluno.id}
                                        className="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                                        style={{
                                            backgroundColor: "#f8f9fa",
                                            marginBottom: "12px",
                                            borderRadius: "6px",
                                            transition: "background-color 0.3s",
                                        }}
                                    >
                                        <div className="flex-grow-1">
                                            <h5 className="mb-1">{aluno.nome}</h5>
                                            <small>
                                                Matrícula: {aluno.matricula}
                                            </small>
                                        </div>

                                        <CiTrash
                                            size={23}
                                            style={{ color: "red" }}
                                            title='Remover Aluno'
                                            cursor={"pointer"}
                                        />

                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListarAluno