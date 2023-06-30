import './App.css';
import BarraDireita from './comps/BarraDireita/BarraDireita';
import BarraEsquerda from './comps/BarraEsqueda/BarraEsquerda';
import Feed from './comps/Feed/Feed';
import Stories from './comps/Stories/Stories';


function App() {
  return (
    <div className="corpo">
      <div className="barra-esquerda">
         <BarraEsquerda />
      </div>
      <div className='conteudo-centro'>
        <Stories />
        <Feed 
        nome_perfil="Sidoka '^"
        nome_perfil2='Veigh'
        nome_perfil3='VoidAppend'
        />
      </div>
      <div className="barra-direita">
        <BarraDireita />
      </div>
      
    </div>
  );
}

export default App;
