import { ITile } from '../interfaces/ITile';

export const tiles =  [
    {
        id: '9c0136b5-98ba-4ff3-a577-a01474ae8bbf',
        type: 'alert',
        score: 65.819,
        isWatched: false,
        body: {
            text: 'Уважамый клиент, приносим извинения за неудобства'
        },
    },
    {
        id: 'ddb1f958-bd2d-49fb-8a14-94d8d1f10958',
        type: 'alert',
        score: 75.9462,
        isWatched: false,
        body: {
            text: 'Доставляем в руки: 10% кешбэк + 10% на остаток по счёту',
            image: 'https://catalogueofarticles.com/wp-content/uploads/2018/01/cashback.png'
        }
    }
] as ITile[];
