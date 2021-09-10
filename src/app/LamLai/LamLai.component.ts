import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lamLai',
    template: `
        <div class="container">
            <h1>asdasdasd</h1>
            <p>{{title}}</p>
            <input type="text" #tagInput />
            <button (click)="changeTitle(tagInput.value)">xoa</button>
            <h3>twoway biding ngModule</h3>
            <input type="text" [(ngModel)]="title">

            <input type="text" (keyup)="changeTitle(inputTitle.value)" #inputTitle>

            <table class="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                        <th>img</th>
                        <th>quatity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let product of arrProduct">
                        <td>{{product.id}}</td>
                        <td>{{product.name}}</td>
                        <td>{{product.price}}</td>
                        <td><img src={{product.img}} width={50} height={50} /></td>
                        <td><input type="text" [(ngModel)]="product.quatity"></td>
                        <td>{{product.price * product.quatity}}</td>
                    </tr>
                </tbody>
            </table>
            <h3>*ngIf</h3>
            <nav class="nav bg-dark text-white text-left">
              <a *ngIf="!isLogin" class="nav-link active text-white" href="#">Login</a>
              <a *ngIf="isLogin" class="nav-link active text-white" href="#">hello {{userName}}</a>
            </nav>
            <div class="form-group">
                <p>Nhap so</p>
                <input type="text" class="form-control" [(ngModel)]="number" />
            </div>
            <div class="alert alert-success">
                <p *ngIf="number%2 === 0">so chan</p>
                <p *ngIf="number%2 !== 0">so le</p>
            </div>
            <select class="form-group" [(ngModel)]="color">
                <option value="red">Red</option>
                <option value="blue">blue</option>
                <option value="yellow">yellow</option>
                <option value="gray">gray</option>
            </select>
            <div [ngSwitch]="color">
                <p style="color: red" *ngSwitchCase="'red'">red</p>
                <p style="color: blue" *ngSwitchCase="'blue'">blue</p>
                <p style="color: yellow" *ngSwitchCase="'yellow'">yellow</p>
                <p style="color: gray" *ngSwitchCase="'gray'">gray</p>
            </div>
            <h3>*ngFor</h3>
            <div class="row">
                <div class="col-4" *ngFor="let user of arrUser; let index = index">
                    <div class="card">
                        <img class="card-img-top" src={{user.img}} alt="">
                        <div class="card-body">
                            <p>ID: {{index + 1}}</p>
                            <h4 class="card-title">{{user.userName}}</h4>
                            <p class="card-text">{{user.password}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})

export class LamLaiComponent implements OnInit {
    arrUser:User[] = [
        {userName: 'cuong', password: 'cuong123',img: 'https://picsum.photos/200/200'},
        {userName: 'chau', password: 'cuong123',img: 'https://picsum.photos/200/200'},
        {userName: 'khai', password: 'cuong123',img: 'https://picsum.photos/200/200'},
    ]
    color:string = 'red'
    number:number = 5
    userName:string = 'cuong'
    isLogin:boolean = true;

    title:string = 'abc'
    changeTitle(newTitle:string) {
        this.title = newTitle
    }

    arrProduct:Product[] = [
        {id: '1', name: 'iphone x', price: 1000, img: 'https://picsum.photos/200/200',quatity: 10},
        {id: '2', name: 'iphone xx', price: 2000, img: 'https://picsum.photos/200/200',quatity: 10},
        {id: '2', name: 'iphone xxx', price: 2000, img: 'https://picsum.photos/200/200',quatity: 10}
    ]

    constructor() { }

    ngOnInit() { }
}

interface Product {
    id:string,
    name:string,
    price:number,
    img:string,
    quatity:number
}
interface User {
    userName:string,
    password:string
    img:string
}