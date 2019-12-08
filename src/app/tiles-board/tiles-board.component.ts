import { Component, Inject } from '@angular/core';
import { INsService, NsServiceToken } from '../../services/interfaces/INsService';

@Component({
    selector: 'app-events-board',
    templateUrl: './tiles-board.template.html',
    styleUrls: ['./tiles-board.style.scss']
})
export class TilesBoardComponent {
    tiles$ = this.nsService.getTiles('45652283-d58a-4653-a4f1-d037b1a14c97');

    constructor(
        @Inject(NsServiceToken)
        private readonly nsService: INsService
    ) {
    }
}
