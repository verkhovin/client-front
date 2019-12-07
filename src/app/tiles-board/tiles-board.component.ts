import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-events-board',
    templateUrl: './tiles-board.template.html',
    styleUrls: ['./tiles-board.style.scss']
})
export class TilesBoardComponent {
    events = [
        {
            id: 'ddb1f958-bd2d-49fb-8a14-94d8d1f10958',
            type: 'alert',
            score: 75.9462,
            isWatched: false,
            body: {
                text: 'Helen Walton',
                image: '../../assets/cyclone.gif'
            }
        },
        {
            id: 'cb0250d7-79e8-49b9-b714-da0f9cd32385',
            type: 'alert',
            score: 88.7844,
            isWatched: false,
            body: {
                text: 'Jean Norris'
            }
        },
        {
            id: '408119d4-652a-42a9-a392-dbc606a1b698',
            type: 'alert',
            score: 14.6434,
            isWatched: false,
            body: {
                text: 'Nelda Miller'
            }
        },
        {
            id: '2c0ab460-6a7a-43b7-b6b9-3a6b8f253928',
            type: 'alert',
            score: 93.4081,
            isWatched: false,
            body: {
                text: 'Lindsay Solis',
                image: '../../assets/holds.jpg'
            }
        },
        {
            id: 'ed09034e-e5a6-48d0-a6bd-305011a47f05',
            type: 'alert',
            score: 1.3178,
            isWatched: false,
            body: {
                text: 'Kimberley Reid',
                image: '../../assets/stars.gif'
            }
        },
        {
            id: '00582a88-4445-4de8-98fb-252697087933',
            type: 'alert',
            score: 22.3956,
            isWatched: false,
            body: {
                text: 'Mitzi Sharp',
                image: '../../assets/vestrahorn.jpg'
            }
        },
        {
            id: '5ba92387-539b-402a-9bf7-da499d0a99ca',
            type: 'alert',
            score: 5.2729,
            isWatched: false,
            body: {
                text: 'Richards Forbes',
                image: '../../assets/wildfire.gif'
            }
        },
        {
            id: '6b93d056-e597-4478-b1d6-2310f3062da0',
            type: 'alert',
            score: 83.1187,
            isWatched: false,
            body: {
                text: 'Maria Shepherd',
                image: '../../assets/fungi.jpg'
            }
        },
        {
            id: 'fc85785d-856f-4e86-930a-b8d6e2689acd',
            type: 'alert',
            score: 13.0942,
            isWatched: false,
            body: {
                text: 'Lolita Sims'
            }
        },
        {
            id: '96906dcc-2b91-4982-87a0-35d094d68731',
            type: 'alert',
            score: 91.0121,
            isWatched: false,
            body: {
                text: 'Holloway Thompson'
            }
        },
        {
            id: '9c0136b5-98ba-4ff3-a577-a01474ae8bbf',
            type: 'alert',
            score: 65.819,
            isWatched: false,
            body: {
                text: 'Hammond Garner'
            }
        },
        {
            id: '1a0dd739-89da-4a99-b846-f8c47343b3a2',
            type: 'alert',
            score: 58.5175,
            isWatched: false,
            body: {
                text: 'Schmidt Wright',
                image: '../../assets/space.jpg'
            }
        }
    ];

    constructor() {
        console.log(this.events);
    }
}
