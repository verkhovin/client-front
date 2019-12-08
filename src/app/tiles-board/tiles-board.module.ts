import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TilesBoardComponent } from './tiles-board.component';
import { TileModule } from '@app/tile/tile.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [TilesBoardComponent],
    imports: [CommonModule, TileModule, RouterModule],
    exports: [TilesBoardComponent]
})
export class TilesBoardModule {}
