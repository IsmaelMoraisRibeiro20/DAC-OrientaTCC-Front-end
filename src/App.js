import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Cadastro from './formularios/cadastro';
import Login from './formularios/login';
import CadastroTcc from './formularios/cadastroTCC';
import AtividadeDoAluno from './paginas/atividadeDoAluno';
import TrabalhoAcademico from './paginas/thabalhoAcademico';
import AdicionarTrabalhoDoTcc from './paginas/adicionarTrabalhoDoTcc';




function App() {


  return (
    <>
     
     <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/atividadeDoAluno" element={<AtividadeDoAluno />} />
        <Route path="/cadastroTCC" element={<CadastroTcc />} />
        <Route path="/trabalhoAcademico" element={<TrabalhoAcademico />} />
        <Route path="/adicionarTrabalhoDoTcc" element={<AdicionarTrabalhoDoTcc />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
