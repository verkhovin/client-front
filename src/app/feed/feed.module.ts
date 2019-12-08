import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { ReactionModule } from '@app/reaction/reaction.module';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [FeedComponent],
    imports: [
        CommonModule,
        ReactionModule,
        IonicModule
    ],
    exports: [FeedComponent]
})
export class FeedModule { }
