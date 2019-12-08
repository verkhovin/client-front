import { Component, Inject } from '@angular/core';
import { INsService, NsServiceToken } from '../../services/interfaces/INsService';

@Component({
    selector: 'app-events-board',
    templateUrl: './tiles-board.template.html',
    styleUrls: ['./tiles-board.style.scss']
})
export class TilesBoardComponent {
    tiles$ = this.nsService.getTiles();

    constructor(
        @Inject(NsServiceToken)
        private readonly nsService: INsService
    ) {}
}
