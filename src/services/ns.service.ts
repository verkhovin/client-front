import { Injectable } from '@angular/core';
import { INsService } from './interfaces/INsService';
import { Observable, of } from 'rxjs';
import { ITile } from './interfaces/ITile';
import { tiles } from './mocks/tiles.mock';
import { HttpClient } from '@angular/common/http';
import { items } from './mocks/items.mocks';
import { IItem } from './interfaces/IItem';

@Injectable({
    providedIn: 'root'
})
export class NsService implements INsService {
    constructor(private readonly httpService: HttpClient) {

    }
    getTiles(): Observable<ITile[]> {
        //return this.httpService.get()

        return of(tiles);
    }
    getItems(): Observable<IItem[]> {
        return of(items);
    }
}
