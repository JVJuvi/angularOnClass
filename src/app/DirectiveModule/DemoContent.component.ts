import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-demo-ngContent',
    template: `
        <nav class="nav justify-content-center">
            <ng-content select=".logo"></ng-content>
          <a class="nav-link active" href="#">Active link</a>
          <a class="nav-link" href="#">Link</a>
          <a class="nav-link disabled" href="#">Disabled link</a>
            <ng-content select=".title"></ng-content>
        </nav>
    `
})

export class DemoContentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}