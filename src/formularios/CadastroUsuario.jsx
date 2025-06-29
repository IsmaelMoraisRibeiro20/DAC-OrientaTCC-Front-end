const CadastroUsuario = () => {

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



  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card shadow p-4" style={{ width: "100%", maxWidth: "500px" }} >
          <h3 className="text-center mb-4">Formulário de Cadastro</h3>

          <form onSubmit={rotaParaLogin}>
            <div className="mb-3">
              <label htmlFor="matricula" className="form-label">
                Matrícula/Siape
              </label>
              <input
                type="text"
                className="form-control"
                id="matricula"
                placeholder="Digite sua matrícula ou SIAPE"
                required
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
                placeholder="Digite seu nome"
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
                placeholder="Digite seu email"
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
                placeholder="Digite sua senha"
                required
                minLength={6}
              />
            </div>

            <div className="mb-4">
              <label className="form-label d-block">Tipo de usuário</label>
              <div className="form-check form-check-inline me-5">
                <input
                  className="form-check-input"
                  type="radio"
                  name="tipoUsuario"
                  id="aluno"
                  value="aluno"
                  required
                />
                <label className="form-check-label" htmlFor="aluno">Aluno</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="tipoUsuario"
                  id="professor"
                  value="professor"
                  required
                />
                <label className="form-check-label" htmlFor="professor">Professor</label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100" >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </>
  );

}
export default CadastroUsuario;