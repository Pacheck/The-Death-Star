import { Film, Vehicle, Person, Planet, Specie, Starship } from "../CustomComponent/types";

export interface PropData {
    data: Film | Vehicle | Person | Planet | Specie | Starship | any;
    imageLogo: string;
    isLoading: boolean;
}

export interface Dados {
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    imageLogo: string;
}
