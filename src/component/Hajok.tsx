import Hajo from "./Hajo";
import { type HajoTipus } from "../adat";
interface HajoListaProps{
  lista: HajoTipus[]
}

export default function Hajok({lista}:HajoListaProps) {
  return (
    <>
    {/* Ami JS kód akkor kapcsos záró jel */}
    {
        lista.map((e,i)=>{
            return <Hajo HAJOM= {e} key={i} />
        })
    }
      
    </>
  );
}
