import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MenubarModule } from 'primeng/menubar';
import {GMapModule} from 'primeng/gmap';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {ChartModule} from 'primeng/chart';
import {ToastModule} from 'primeng/toast';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import {TabViewModule} from 'primeng/tabview';
import {OrderListModule} from 'primeng/orderlist';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    GMapModule,
    CardModule,
    ButtonModule,
    ChartModule,
    ToastModule,
    ScrollPanelModule,
    TabViewModule,
    OrderListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
