import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { CreateDeviceComponent } from './create-device/create-device.component';
//import { NgxPaginationModule } from 'ngx-pagination/dist/ngx-pagination.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { DeviceDetail } from './ServicesAndClasses/Classes/DeviceDetail';

@NgModule({
  declarations: [
    AppComponent,
    DeviceListComponent,
    CreateDeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [DeviceDetail],
  bootstrap: [AppComponent]
})
export class AppModule { }
