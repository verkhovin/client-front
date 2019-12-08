import { Component, Inject } from '@angular/core';
import { INsService, NsServiceToken } from '../../services/interfaces/INsService';

@Component({
    selector: 'feed',
    templateUrl: './feed.template.html',
    styleUrls: ['./feed.style.scss']
})
export class FeedComponent {
    items$ = this.nsService.getItems('3fd80556-a8a7-4eba-b4c1-a40ad250a3f6');

    constructor(
        @Inject(NsServiceToken)
        private readonly nsService: INsService
    ) {}

    getImgUrl(url: string): string {
        return `url(${url})`;
    }
}
