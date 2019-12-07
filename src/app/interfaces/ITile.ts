import { IContent } from '@app/interfaces/IContent';

export interface ITile {
    id: string;
    type: string;
    score:number;
    isWatched: boolean;
    body: IContent
}
