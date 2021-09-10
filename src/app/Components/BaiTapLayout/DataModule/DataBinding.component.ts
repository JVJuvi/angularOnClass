import { Component, OnInit, NgModule } from '@angular/core';

@Component({
    selector: 'app-data-binding',
    template: `
        <div class="container">
            <h3>databinding</h3>
            <h3>oneway binding</h3>
            <p class="text-danger">1. Interpolation (binding dữ liệu từ modules -> view thông qua thuộc tính với cặp dấu ngoặc nhọn</p>
            <p >Tiêu đề: {{title}} </p>
            <input type="text" value="{{title}}">
            <p class="text-danger">2. property binding (biding dựa trên thuộc tính của thẻ thông qua dấu [])</p>
            <div [innerHTML]="'Thông tin lớp học' + ' ' + title" ></div>
            <input type="text" [value]="title">
            <p class="text-danger">3. Event binding  (thay đổi dữ liệu trên giao diện  thông qua xử lý thao tác  từ ngươi dùng )</p>
            <div class="form-group">
                <p>Tiêu đề</p>
                <input type="text" class="form-control w-25" #tagInput />
                <button class="btn btn-success" (click)="changeTitle(tagInput.value)" >Change title</button>
            </div>
            <h3>Twoway binding (binding dữ liệu 2 chiều tự động)</h3>
            <input type="text" class="form-control" [(ngModel)]="title">

            <table class="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>image</th>
                        <th>price</th>
                        <th>quatity</th>
                        <th>total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let product of arProduct">
                        <td>{{product.id}}</td>
                        <td>{{product.name}}</td>
                        <td><img [src]="product.img" width="50" height="50" alt=""></td>
                        <td>{{product.price}}</td>
                        <td><input type="text" class="form-control" [(ngModel)]="product.quatity"></td>
                        <td>{{product.price * product.quatity}}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    `
})

export class DataBindingComponent implements OnInit {

    title:string = 'abc';
    arProduct: Product[] = [
        {id: '1', name: 'Iphone X', price: 1000, img:'https://picsum.photos/200/200',quatity: 1},
        {id: '1', name: 'Iphone X', price: 1000, img:'https://picsum.photos/200/200',quatity: 1},
        {id: '1', name: 'Iphone X', price: 1000, img:'https://picsum.photos/200/200',quatity: 1},

    ]

    constructor() {
        
    }
    changeTitle(newTitle:string) {
        this.title = newTitle;
    }

    ngOnInit() { }


}
interface Product {
    id: string;
    name: string;
    price: number;
    img: string;
    quatity: number;
}