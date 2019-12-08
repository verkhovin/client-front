import { Component, Inject } from '@angular/core';
import { INsService, NsServiceToken } from '../../services/interfaces/INsService';

@Component({
    selector: 'feed',
    templateUrl: './feed.template.html',
    styleUrls: ['./feed.style.scss']
})
export class FeedComponent {
    items$ = this.nsService.getItems();

    constructor(
        @Inject(NsServiceToken)
        private readonly nsService: INsService
    ) {}

    getImgUrl(url: string): string {
        return `url(${url})`;
    }
}
