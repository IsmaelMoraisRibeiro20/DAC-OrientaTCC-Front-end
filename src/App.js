import { Routes, Route, Navigate } from 'react-router-dom';

import CadastroUsuario from './formularios/CadastroUsuario.jsx';
import Login from './formularios/Login.jsx';

import PrincipalDoAluno from './paginas/aluno/PrincipalDoAluno'
import CadastroTcc from './formularios/CadastroTCC.jsx';
import ListaAtividadesAluno from './paginas/aluno/ListaAtividadesAluno.jsx';
import AdicionarTrabalhoDoTcc from './paginas/aluno/AtividadeDoAluno.jsx';

import PrincipalDoOrientador from './paginas/orientador/PrincipalDoOrientador.jsx';
import ListaAtividadesOrientador from './paginas/orientador/ListaAtividadesOrientador.jsx';
import AtividadeOrientador from './paginas/orientador/AtividadeOrientador.jsx';

import ListarAluno from './paginas/coordenador/ListarAluno.jsx';
import EditarOrientador from './paginas/coordenador/EditarOrientador.jsx';
import GerenciarOrientador from './paginas/coordenador/GerenciarOrientador.jsx';

import { AppProvider } from './context/AppContext.jsx';

function App() {

  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/principalDoAluno" />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="/login" element={<Login />} />


        <Route path="/principalDoAluno" element={<PrincipalDoAluno />} />
        <Route path="/cadastroTCC" element={<CadastroTcc />} />
        <Route path="/listaAtividadesAluno" element={<ListaAtividadesAluno />} />
        <Route path="/atividadeDoAluno" element={<AdicionarTrabalhoDoTcc />} />


        <Route path="/principalDoOrientador" element={<PrincipalDoOrientador />} />
        <Route path="/listaAtividadesOrientador" element={<ListaAtividadesOrientador />} />
        <Route path="/atividadeOrientador" element={<AtividadeOrientador />} />

        <Route path="/listarAluno" element={<ListarAluno />} />
        <Route path="/listarOrientador" element={<GerenciarOrientador />} />
        <Route path="/editarOrientador" element={<EditarOrientador />} />

      </Routes>
    </AppProvider>

  );
}

export default App;
