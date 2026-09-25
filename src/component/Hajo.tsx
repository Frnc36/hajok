import { type HajoTipus } from "../adat";
interface HajoProps{
  HAJOM: HajoTipus,
  index: number
  kivalasztKezelo:()=>void
}
/* props - a szülókomponens a gyerekelemnek a prop-on keresztül adja át a paraméter */
export default function Hajo({HAJOM, index,kivalasztKezelo}:HajoProps) {



  return (
    <>
      <div className="hajo">
        <h2>{HAJOM.nev}</h2>
        <p>{index+1}.hajó</p>
        <p>Kapitány neve: <span>{HAJOM.kapitany}</span></p>
        <p>Hajó szin: <span>{HAJOM.szin}</span></p>
        <button onClick={()=>kivalasztKezelo}>Kiválaszt</button>
      </div>
    </>
  );
}
