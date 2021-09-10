import { NgModule } from '@angular/core';
import { ProductListComponent } from './DemoInput/ProductList.component';
import { ProducComponent } from './DemoInput/Product.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [ProductListComponent, ProducComponent],
    imports: [CommonModule, FormsModule],
    exports: [ProductListComponent],
})
export class PropsModule { }
