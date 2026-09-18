export type HajoSzin = |"fekete" | "kék" | "piros" | "fehér" | "zöld";

export interface HajoTipus {
  readonly id: number;
  nev: string;
  kapitany: string;
  valodi: boolean;
  szin: HajoSzin;
  leiras: string;
}

export const HAJOLISTA: HajoTipus[] = [
  {
    id: 11,
    nev: "Fekete Gyöngy",
    szin: "fekete",
    kapitany: "Jack Sparrow",
    valodi: false,
    leiras: "Ez egy szuper gyors kaóz hajó a Karib-tengeren",
  },
  {
    id: 15,
    nev: "Bolygó Hollandi",
    szin: "zöld",
    kapitany: "Davy Jones",
    valodi: false,
    leiras: "OwO",
  },
  {
    id: 18,
    nev: "Titanic",
    szin: "fehér",
    kapitany: "Leonardo De Caprio",
    valodi: true,
    leiras: "RIP",
  },
];
