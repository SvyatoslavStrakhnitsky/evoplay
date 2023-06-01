export interface IBook {
    text: string;
    image: string;
    title?: string;
    alt?: string;
}

export type BookSize = 'stretch' | 'fixed';