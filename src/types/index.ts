export interface ResultsProps {
    results: BeerOrBrewer[];
}

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

export type BeerOrBrewer = Beer | Brewer;

export interface BeerCardProps {
    item: Beer;
}
export interface BrewerCardProps {
    item: Brewer;
}
