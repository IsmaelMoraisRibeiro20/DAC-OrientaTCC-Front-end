const Login = () => {

  function rotaParaEntrar(e) {
    e.preventDefault();


    const form = e.target;
    if (form.checkValidity()) {
      window.location.href = "/atividadeDoAluno";
    } else {
      form.reportValidity();
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card shadow p-4" style={{ width: "100%", maxWidth: "500px" }}>
          <h3 className="text-center mb-4">Login</h3>

          <form onSubmit={rotaParaEntrar}>
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
              <a href="/cadastro" className="d-flex justify-content-center">Esqueceu a senha?</a>
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
export default Login;