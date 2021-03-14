export interface ResultsProps<T, U> {
    results: Result<T, U>[];
}

export type Result<T, U> = {
    item: T | U;
};

export type Beer = {
    name: string;
    description: string;
    isAlcoholic: boolean;
    alcohol: number;
    brewer: Brewer;
    _id: string;
};

export type Brewer = {
    name: string;
    location: string;
    _id: string;
    beers?: [Beer];
};

export interface BeerCardProps {
    item: Beer;
}
export interface BrewerCardProps {
    item: Brewer;
}
