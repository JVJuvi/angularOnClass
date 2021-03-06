import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './DataBinding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [DataBindingComponent],
    imports: [CommonModule,FormsModule],
    exports: [DataBindingComponent],
})
export class DataBindingModule { }
