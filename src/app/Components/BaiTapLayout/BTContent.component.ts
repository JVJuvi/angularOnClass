import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-content',
    template: `
        <div class="bt-content">
            CONTENT
        </div>
    `,
    styles: [`
        .bt-content {
            background-color: yellow;
        }
    `]
})

export class BTContent implements OnInit {
    constructor() { }

    ngOnInit() { }
}