import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product-list',
    template: `
        <div class="container">
            <div class="w-25">
                <app-product></app-product>
            </div>
        </div>
    `
})

export class ProductListComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}