import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './Directive.component';
import { DemoContentComponent } from './DemoContent.component';
import { BaiTapDirective } from './BaiTapDirective.component';
import { BaiTapQLSV } from './BaiTapQLSV.component';

@NgModule({
    imports: [CommonModule],   
    exports: [DirectiveComponent],
    declarations: [DirectiveComponent,DemoContentComponent,BaiTapDirective,BaiTapQLSV],
})
export class DirectiveModule { }
