import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bai-tap-layout',
    template: `
        <div>
            HOME COMPONENT
            <app-bt-header></app-bt-header>
            <div class="d-flex">
                <div style="width: 70%;">
                    <app-bt-layout></app-bt-layout>
                </div>
                <div style="width: 30%">
                    <app-bt-content></app-bt-content>
                </div>
            </div>
            <div>
                <app-bt-footer></app-bt-footer>
            </div>
        </div>
    `
})

export class BaiTapLayout implements OnInit {
    constructor() { }

    ngOnInit() { }
}