import { NgModule } from '@angular/core';
import { LamLaiComponent } from './LamLai.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




@NgModule({
    declarations: [LamLaiComponent],
    imports: [CommonModule,FormsModule],
    exports: [LamLaiComponent],
})
export class LamLaiModule { }
