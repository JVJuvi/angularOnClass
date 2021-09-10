import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './Components/Demo.component';
import { BaiTapLayoutModule } from './Components/BaiTapLayout/BaiTapLayout.module';
import { DataBindingModule } from './Components/BaiTapLayout/DataModule/DataBinding.module';
import { DirectiveModule } from './DirectiveModule/Directive.module';
import { PropsModule } from './PropModule/Props.module';
import { LamLaiModule } from './LamLai/LamLai.module';




@NgModule({
  declarations: [
    AppComponent, DemoComponent,  // nơi chứa component (mỗi component sinh ra phải có component chứa nó)
  ],
  imports: [
    BrowserModule,BaiTapLayoutModule, DataBindingModule,DirectiveModule, PropsModule,LamLaiModule // nơi import các module của ứng dụng
  ],




  providers: [], // nơi khai báo các services
  bootstrap: [AppComponent] // nơi khai báo các component chạy trên index Component <app-root></app-root> được chạy trên index
})
export class AppModule { }
