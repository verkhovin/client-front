import { Injectable } from '@angular/core';
import { INsService } from './interfaces/INsService';
import { Observable } from 'rxjs';
import { ITile } from './interfaces/ITile';
import { HttpClient } from '@angular/common/http';
import { IItem } from './interfaces/IItem';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class NsService implements INsService {
    constructor(private readonly httpService: HttpClient) {}

    getTiles(userId: string): Observable<ITile[]> {
        return this.httpService
            .get<ITile[]>(`/content/preview/${userId}`)
            .pipe(
                map(tiles => tiles.slice(0,12))
            );
    }

    getItems(tileId: string): Observable<IItem[]> {
        return this.httpService
            .get<IItem[]>(`/content/feed/${tileId}`);
    }
}
