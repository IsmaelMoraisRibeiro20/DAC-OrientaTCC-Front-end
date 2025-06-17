import { useNavigate } from 'react-router-dom';

const CadastroTcc = () => {
    const navegar = useNavigate();

    function buttonVoltar() {
        navegar('/principalDoAluno')

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
        <>
            {/* CONTEÚDO PRINCIPAL */}
            <div className=" d-flex justify-content-center align-items-center min-vh-100 bg-light">
                <div className="card shadow p-4 d-flex justify-content-center"
                    style={{
                        width: "100%",
                        maxWidth: "700px",
                        height: "550px",
                        display: "flex",
                        flexDirection: "column",
                    }}>

                    <h3 className="text-center mb-4">CadastrarTCC</h3>

                    <form onSubmit={rotaParaCadastrar}>
                        <div className="mb-3">
                            <label htmlFor="tema" className="form-label">
                                Tema
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="tema"
                                placeholder="Digite o tema do TCC"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="senha" className="form-label">
                                Orientador SIAPE
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="siape"
                                placeholder="Digite o SIAPE"
                                required
                                minLength={7}
                            />

                        </div>

                        <div className="d-flex justify-content-between" style={{ padding: "0 2px" }}>
                            <button type="button" className="btn btn-secondary " style={{ width: "220px" }} onClick={buttonVoltar}>
                                Voltar
                            </button>

                            <button type="submit" className="btn btn-primary" style={{ width: "220px" }} id="cadastrar">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
export default CadastroTcc;