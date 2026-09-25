import Hajo from "./Hajo";
import { type HajoTipus } from "../adat";
interface HajoListaProps {
  lista: HajoTipus[];
  kivalasztKezelo: () => void;
}

export default function Hajok({ lista, kivalasztKezelo }: HajoListaProps) {
  return (
    <>
      {/* Ami JS kód akkor kapcsos záró jel */}
      {lista.map((e, i) => {
        return <Hajo HAJOM={e} key={i} index={i} kivalasztKezelo={kivalasztKezelo} />;
      })}
    </>
  );
}
