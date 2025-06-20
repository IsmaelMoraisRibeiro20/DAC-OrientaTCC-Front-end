import React, { useState } from 'react'

const EditarOrientador = () => {

    const orientador = {
        id: 1,
        nome: "Andrey",
        siape: "123",
        areaAtuacao: "IA",
        permissao: "coordenador",
        email: "a@a",
        senha: "13579"
    }

    const [tipoUsuario, setTipoUsuario] = useState('');

    function rotaParaLogin(e) {
        e.preventDefault();

        // Se os campos estão válidos, redireciona
        const form = e.target;
        if (form.checkValidity()) {//é um método nativo do HTML que verifica se todos os campos do formulário que têm validação (ex: required, type="email", etc.) estão preenchidos corretamente.
            window.location.href = "/login";
        } else {
            form.reportValidity(); // mostra os erros na tela
        }
    }

    const handleTipoUsuarioChange = (e) => {
        setTipoUsuario(e.target.value);
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <div className="card shadow p-4" style={{ width: "100%", maxWidth: "500px" }} >
                    <h3 className="text-center mb-4">Editar Orientador</h3>

                    <form>

                        <div className="mb-3">
                            <label htmlFor="siape" className="form-label">
                                SIAPE
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="siape"
                                value={orientador.siape}
                                required
                                disabled={true}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="nome" className="form-label">
                                Nome
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="nome"
                                value={orientador.nome}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={orientador.email}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="senha" className="form-label">
                                Senha
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="senha"
                                value={orientador.senha}
                                required
                                minLength={6}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="area" className="form-label">
                                Área de Atuação
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="area"
                                value={orientador.areaAtuacao}
                                required
                            />
                        </div>


                        <div className="mb-4">
                            <label className="form-label d-block">Tipo de usuário</label>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="tipoUsuario"
                                    id="professor"
                                    value="professor"
                                    checked={true}
                                    required
                                />
                                <label className="form-check-label" htmlFor="professor">Professor</label>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="form-label d-block">Permissão</label>
                            <div className="form-check form-check-inline me-5">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="permissao"
                                    id="orientador"
                                    value="orientador"
                                    required
                                />
                                <label className="form-check-label" htmlFor="orientador">Orientador</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="permissao"
                                    id="coordenador"
                                    value="coordenador"
                                    required
                                />
                                <label className="form-check-label" htmlFor="coordenador">Coordenador</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                            Salvar
                        </button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default EditarOrientador