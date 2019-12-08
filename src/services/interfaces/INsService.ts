import { Observable } from 'rxjs';
import { ITile } from './ITile';
import { InjectionToken } from '@angular/core';
import { IItem } from './IItem';
export const NsServiceToken = new InjectionToken(
    'NsServiceToken'
);
export interface INsService {
    getTiles(): Observable<ITile[]>;
    getItems(): Observable<IItem[]>;
}
