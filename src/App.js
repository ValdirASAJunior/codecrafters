import './App.css';
import Navbar from './componentes/Navbar';
import Titulo from './componentes/Titulo';
import Projetos from './componentes/Projetos';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">
      <div className="estrelas1"></div>
      <div className="estrelas2"></div>
      <Navbar/>
      <Titulo/>
      <Projetos/>
      <Footer/>
    </div>
  );
}

export default App;
