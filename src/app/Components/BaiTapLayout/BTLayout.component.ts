import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-layout',
    template: `
        <div class="bt-sidebar">
            adasdasSIDE BAR
        </div>
    `,
    styles: [`
        .bt-sidebar {
            background-color: green
        }
    `]
})

export class BaiTapCarousel implements OnInit {
    constructor() { }

    ngOnInit() { }
}