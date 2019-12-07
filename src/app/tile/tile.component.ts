import { Component, Input, OnInit } from '@angular/core';
import { ITile } from '@app/interfaces/ITile';

@Component({
    selector: 'tile',
    templateUrl: './tile.template.html',
    styleUrls: ['./tile.style.scss']
})
export class TileComponent implements OnInit {
    @Input() tile: ITile;

    constructor() {}

    ngOnInit() {}
}
