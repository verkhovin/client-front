import { IReaction } from './IReaction';
import { IItemBody } from './IItemBody';

export interface IItem {
    id: string;
    type: string;
    score: number;
    created: string;
    body: IItemBody;
    reaction?: IReaction;
}

export enum ContentTypes {
    'content',
    'warning',
    'alert'
}
