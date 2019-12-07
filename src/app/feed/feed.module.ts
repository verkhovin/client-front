import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { ArticleModule } from '@app/article/article.module';



@NgModule({
  declarations: [FeedComponent],
    imports: [
        CommonModule,
        ArticleModule
    ],
    exports: [FeedComponent]
})
export class FeedModule { }
