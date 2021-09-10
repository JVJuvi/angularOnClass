import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-footer',
    template: `
        <div class="bt-footer">
            FOOTER
        </div>
    `,
    styles: [`
        .bt-footer {
            background-color: blue;
        }
    `]
})

export class BTFooter implements OnInit {
    constructor() { }

    ngOnInit() { }
}