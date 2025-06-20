import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './formularios/Login.jsx';
import PrincipalDoAluno from './paginas/aluno/PrincipalDoAluno'
import CadastroUsuario from './formularios/CadastroUsuario.jsx';
import CadastroTcc from './formularios/CadastroTCC.jsx';
import AdicionarTrabalhoDoTcc from './paginas/aluno/AtividadeDoAluno.jsx';
import ListaAtividadesAluno from './paginas/aluno/ListaAtividadesAluno.jsx';
import PrincipalDoOrientador from './paginas/orientador/PrincipalDoOrientador.jsx';
import ListaAtividadesOrientador from './paginas/orientador/ListaAtividadesOrientador.jsx';
import AtividadeOrientador from './paginas/orientador/AtividadeOrientador.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/cadastro" />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/login" element={<Login />} />

          
          <Route path="/principalDoAluno" element={<PrincipalDoAluno />} />
          <Route path="/cadastroTCC" element={<CadastroTcc />} />
          <Route path="/listaAtividadesAluno" element={<ListaAtividadesAluno />} />
          <Route path="/adicionarTrabalhoDoTcc" element={<AdicionarTrabalhoDoTcc />} />


          <Route path="/principalDoOrientador" element={<PrincipalDoOrientador />} />
          <Route path="/listaAtividadesOrientador" element={<ListaAtividadesOrientador />} />
          <Route path="/AtividadeOrientador" element={<AtividadeOrientador />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
