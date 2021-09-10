import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product',
    template: `
        <div class="card">
            <img src="https://picsum.photos/200/200" />
            <div class="card-body bg-dark text-white">
                <p>Tên sản phẩm</p>
                <p>100</p>
            </div>
        </div>
    `
})

export class ProducComponent implements OnInit {



    constructor() { }

    ngOnInit() { }
}