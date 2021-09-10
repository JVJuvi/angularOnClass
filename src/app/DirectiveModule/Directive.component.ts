import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directive',
    template: `
        <nav class="nav bg-dark text-white">
            <a *ngIf="!isLogin" class="nav-link active text-white" href="#" (click)="login()">Login</a>
            <a *ngIf="isLogin" class="nav-link active text-white" href="#">hello ! {{userName}}</a>
        </nav>  
        <app-demo-ngContent>
            <img class="logo" src="https://picsum.photos/200/200" />
            <h3 class="title">cybersoft</h3>
        </app-demo-ngContent>
        <hr />
        <p [ngClass]="{'mau-chu': mauChu, 'font-chu': fontChu}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fugiat nesciunt distinctio quisquam suscipit assumenda animi magni facilis harum excepturi sequi provident possimus non, totam, eum at! Architecto, aut veniam?</p>

       <h3>ng style</h3>
       <div [ngStyle]="{'background-image': backGroundImage}" style="height:300px">
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias velit, vel tenetur incidunt culpa aliquam laudantium doloribus, explicabo doloremque earum quam eos iste molestias exercitationem veritatis numquam sit. Odit, minima!
       </div>
       <h3>Bai Tap</h3>
       <p [ngStyle]="{'font-size': fontSize+'px'}">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias velit, vel tenetur incidunt culpa aliquam laudantium doloribus, explicabo doloremque earum quam eos iste molestias exercitationem veritatis numquam sit. Odit, minima!</p>
       <button class="btn btn-success" (click)="tangGiamFont(true)">+</button>
       <button class="btn btn-success" (click)="tangGiamFont(false)">-</button>
       <h3>Bai tap login</h3>
       <app-bt-directive></app-bt-directive>
       <app-bt-QLSP></app-bt-QLSP>
    `,
    styles:[`
        .mau-chu {
            color: red;
        }

        .font-chu {
            font-size: 25px;
        }
    `]
})

export class DirectiveComponent implements OnInit {

    fontSize:number = 17;

    mauChu:boolean = true;
    fontChu:boolean = true;
    backGroundImage:string = 'url("https://picsum.photos/200/200")';
    

    number:number = 5;
    userName:string = 'cuong dep chai';
    isLogin:boolean = false;

    login() {
        this.isLogin = true;
    }

    tangGiamFont(tangGiam:boolean){
        if(tangGiam) this.fontSize +=2;
        else this.fontSize -=2;
    }

    constructor() { }



    ngOnInit() { }
}