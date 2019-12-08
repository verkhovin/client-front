import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactionComponent } from './reaction.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [ReactionComponent],
    imports: [CommonModule, IonicModule],
    exports: [ReactionComponent]
})
export class ReactionModule {}
