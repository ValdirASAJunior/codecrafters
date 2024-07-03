import './App.css';
import Navbar from './componentes/Navbar';
import Titulo from './componentes/Titulo';
import Projetos from './componentes/Projetos';

function App() {
  return (
    <div className="App">
      <div className="estrelas1"></div>
      <div className="estrelas2"></div>
      <Navbar/>
      <Titulo/>
      <Projetos/>
    </div>
  );
}

export default App;
