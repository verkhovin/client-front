import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesBoardComponent } from './tiles-board.component';

describe('EventsBoardComponent', () => {
    let component: TilesBoardComponent;
    let fixture: ComponentFixture<TilesBoardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TilesBoardComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TilesBoardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
