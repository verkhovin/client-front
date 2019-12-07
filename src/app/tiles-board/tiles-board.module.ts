import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TilesBoardComponent } from './tiles-board.component';

@NgModule({
    declarations: [TilesBoardComponent],
    imports: [CommonModule],
    exports: [TilesBoardComponent]
})
export class TilesBoardModule {}
