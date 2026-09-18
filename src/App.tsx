import { HAJOLISTA } from "./adat";
import Hajok from "./component/Hajok";
import "./App.css";


function App() {
  return (
    <>
      {/*React fragment*/}
      <header>
        <h1>React</h1>
      </header>
      <article>
        {/*ide kerül a hajó, a comment js kódnak minösül kapcsos zárójlebe kerül */}
        <Hajok lista={HAJOLISTA}/>
      </article>
      <footer>
        <p>Mágori Ferenc Ferdinánd</p>
      </footer>
    </>
  );
}

export default App;
