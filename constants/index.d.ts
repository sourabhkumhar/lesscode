export interface Country {
    id: number;
    name: string;
    iso2: string;
}
export interface Genre {
    label: string;
    value: string;
}
export interface Month {
    name: string;
    short: string;
}
export declare const defaultResponseMessage: Record<number, string>;
export declare const successCode: Set<number>;
export declare const months: Month[];
export declare const genres: Genre[];
export declare const countries: Country[];
