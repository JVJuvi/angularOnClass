import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BaiTapLayout } from './BaiTapLayout.component';
import { BTHeaderComponent } from './BTHeader.component';
import { BaiTapCarousel } from './BTLayout.component';
import { BTContent } from './BTContent.component';
import { BTFooter } from './BTFooter.component';

@NgModule ({
    declarations: [BaiTapLayout, BTHeaderComponent, BaiTapCarousel,BTContent, BTFooter], //chứa các component thuôc module
    imports: [CommonModule], // nơi import các module khác trên ứng dụng
    exports: [BaiTapLayout] // kết quả cần xuất ra của modlue này để module khác import vào sử dụng
})

export class BaiTapLayoutModule {} 