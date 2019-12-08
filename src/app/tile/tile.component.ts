import { Component, Input } from '@angular/core';
import { ITile } from '../../services/interfaces/ITile';

@Component({
    selector: 'tile',
    templateUrl: './tile.template.html',
    styleUrls: ['./tile.style.scss']
})
export class TileComponent {
    @Input() tile: ITile;
}
