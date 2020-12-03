import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeviceListComponent} from '../app/device-list/device-list.component';
import {CreateDeviceComponent} from '../app/create-device/create-device.component';



const routes: Routes = [
  { path: '', component: DeviceListComponent },              
  { path: 'create-device', component:CreateDeviceComponent }           

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
