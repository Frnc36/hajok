import "./hajo.css";

import { type HajoTipus } from "../adat";
interface HajoProps{
  HAJOM: HajoTipus
}
/* props - a szülókomponens a gyerekelemnek a prop-on keresztül adja át a paraméter */
export default function Hajo({HAJOM}:HajoProps) {

  return (
    <>
      <div className="hajo">
        <h2>{HAJOM.nev}</h2>
        <p>Kapitány neve: <span>{HAJOM.kapitany}</span></p>
        <p>Hajó szin: <span>{HAJOM.szin}</span></p>
        <button>Kiválaszt</button>
      </div>
    </>
  );
}
