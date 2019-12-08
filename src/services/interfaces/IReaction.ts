export enum Reactions {
    'none',
    'like',
    'dislike'
}
export interface IReaction {
    action?: string;
    isBookmarked?: boolean;
}
