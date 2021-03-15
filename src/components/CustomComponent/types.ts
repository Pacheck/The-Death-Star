export interface Specie {
    average_height: string;
    average_lifespan: string;
    created: string;
    designation: string;
    edited: string;
    eye_colors: string;
    films: string[];
    hair_colors: string;
    language: string;
    people: string[];
    url: string;
    classification: string;
    homeworld: string | null;
    name: string;
    skin_colors: string;
}

export interface Film {
    character: string[];
    created: string;
    director: string;
    edited: string;
    episode_id: number;
    opening_crawl: string;
    planets: string[];
    producer: string;
    release_date: string;
    species: string[];
    starships: string[];
    title: string;
    url: string;
    vehicles: string[]
}

export interface Person {
    birth_year: string;
    created: string;
    edited: string;
    eye_color: string;
    films: string[];
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string;
    mass: string;
    name: string;
    skin_color: string;
    species: string[];
    starships: string[];
    url: string;
    vehicles: string;
}

export interface Planet {
    climate: string;
    created: string;
    diameter: string;
    edited: string;
    films: string[];
    gravity: string;
    name: string;
    orbital_period: string;
    population: string;
    residents: string[];
    rotation_period: string;
    surface_water: string;
    terrain: string;
    url: string;
}

export interface Starship {
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    creeated: string;
    crew: string;
    edited: string;
    films: string[];
    hyperdrive_rating: string;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    pilots: string[];
    starship_class: string;
    url: string;
}

export interface Vehicle {
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: string;
    crew: string;
    edited: string;
    films: string[];
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    pilots: string[];
    url: string;
    vehicle_class: string;
}

export interface Response {
    count: number;
    next: string | null;
    previous: string | null;
    results: []
}

export type Props = {
    children: JSX.Element[] | JSX.Element; ////////////////////
    className: string;
    onChange: any;
    count?: number;
    variant: "text" | "outlined" | undefined;
    shape: "round" | "rounded" | undefined;
  };

export interface APIResponse {
    specie?: Specie;
    films?: Film;
    people?: Person;
    planets?: Planet;
    starships?: Starship;
    vehicles?: Vehicle;
}
