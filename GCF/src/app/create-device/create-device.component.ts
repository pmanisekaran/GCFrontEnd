import { Component, OnInit } from '@angular/core';
import { DeviceDetail } from '../ServicesAndClasses/Classes/DeviceDetail';
import { DeviceListService } from '../ServicesAndClasses/Servicess/device-list.service';

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.scss']
})
export class CreateDeviceComponent implements OnInit {
  submitted = false;
  computerTypes = ['Desktop PC', 'Server', 'Laptop', 'Tablet', 'Phone'];
  constructor(public deviceDetail: DeviceDetail, private deviceListService: DeviceListService) { }

  ngOnInit(): void {
    console.log(this.deviceListService);

  }
  onSubmit() {
// code here

  }
  clear() {

    console.log("clear");
    this.deviceDetail.Clear();
  }

}
