import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './formularios/Login.jsx';
import PrincipalDoAluno from './paginas/aluno/PrincipalDoAluno'
import CadastroUsuario from './formularios/CadastroUsuario.jsx';
import CadastroTcc from './formularios/CadastroTCC.jsx';
import AdicionarTrabalhoDoTcc from './paginas/aluno/AdicionarTrabalhoDoTcc.jsx';
import ListaAtividadesAluno from './paginas/aluno/ListaAtividadesAluno.jsx';
import PrincipalDoOrientador from './paginas/orientador/PrincipalDoOrientador.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/login" element={<Login />} />
          <Route path="/principalDoAluno" element={<PrincipalDoAluno />} />
          <Route path="/cadastroTCC" element={<CadastroTcc />} />
          <Route path="/listaAtividadesAluno" element={<ListaAtividadesAluno />} />
          <Route path="/adicionarTrabalhoDoTcc" element={<AdicionarTrabalhoDoTcc />} />


          <Route path="/principalDoOrientador" element={<PrincipalDoOrientador />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
