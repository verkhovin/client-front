import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TilesBoardComponent } from './tiles-board.component';
import { TileModule } from '@app/tile/tile.module';

@NgModule({
    declarations: [TilesBoardComponent],
    imports: [CommonModule, TileModule],
    exports: [TilesBoardComponent]
})
export class TilesBoardModule {}
