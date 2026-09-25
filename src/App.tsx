import { HAJOLISTA, type HajoTipus } from "./adat";
import Hajok from "./component/Hajok";
import "./App.css";

function App() {
  /* const lista: HajoTipus[] = HAJOLISTA; *//* const-nak rögtön kell adni értéket, nem lehet később */
  function kivalasztKezelo(index: number) {
    console.log(index);
    /* megváltoztatjuk az indexedik.hajó színét */
    lista[index].szin = "Lila";
    /* állapot kezelés */
  }

  return (
    <>
      {/*React fragment*/}
      <header>
        <h1>React</h1>
      </header>
      <article>
        {/*ide kerül a hajó, a comment js kódnak minösül kapcsos zárójlebe kerül */}
        <Hajok lista={lista} kivalasztKezeloProps={kivalasztKezelo} />{" "}
        {/* függvény referencia, memoria címet ad át */}
      </article>
      <footer>
        <p>Mágori Ferenc Ferdinánd</p>
      </footer>
    </>
  );
}

export default App;
