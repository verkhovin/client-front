import { Component, Inject } from '@angular/core';
import { INsService, NsServiceToken } from '../../services/interfaces/INsService';
import { ModalController } from '@ionic/angular';
import { ArticleComponent } from '@app/article/article.component';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'feed',
    templateUrl: './feed.template.html',
    styleUrls: ['./feed.style.scss']
})
export class FeedComponent {
    items$ =
        this.router.params
            .pipe(
                map(params => params.id),
                switchMap(id => this.nsService.getItems(id))
            );

    constructor(
        @Inject(NsServiceToken)
        private readonly nsService: INsService,
        private router: ActivatedRoute
    ) {
    }

    getImgUrl(url: string): string {
        return `url(${url})`;
    }
}
