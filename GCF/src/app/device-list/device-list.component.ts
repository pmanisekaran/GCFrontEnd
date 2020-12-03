import { Component, OnInit } from '@angular/core';
import { DeviceDetail } from '../ServicesAndClasses/Classes/DeviceDetail';
import { DeviceListService } from '../ServicesAndClasses/Servicess/device-list.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {
  toPrice: number;
  fromPrice: number;
  orderBy: string;
  deviceDetailList: Array<DeviceDetail>;
  orginalDeviceDetailList: Array<DeviceDetail>;
  totalRecords: number = 0;
  page: number = 1;
  itemsPerPage: number = 9;
  fields = ['Price', 'Brand'];
  isCard: boolean = true;
  displayLabel: string = "Display Grid";

  constructor(private deviceListService: DeviceListService) { }

  ngOnInit(): void {
    this.deviceListService.getDeviceList().subscribe(data => {

      this.deviceDetailList = data;
      this.orginalDeviceDetailList = this.deviceDetailList;
      this.totalRecords = this.deviceDetailList.length;

    });

  }
  changeDisplay() {
    this.isCard = !this.isCard;
    this.displayLabel = this.isCard ? "Display grid" : "Display Card";
  }
  ApplyFilterSort() {

    console.log("this.fromPrice:" + this.fromPrice);
    if (this.fromPrice >= 1 && this.toPrice >= 1) {
      
      this.deviceDetailList = this.deviceDetailList.filter(f => (f.price >= this.fromPrice && f.price <= this.toPrice));
      
    }
    else {
      this.deviceDetailList = this.orginalDeviceDetailList;
    }
    if (this.orderBy == "Brand" || this.orderBy == "Price") {
      {
        if (this.orderBy == "Brand")
          this.deviceDetailList = this.deviceDetailList.sort((a, b) => a.brand.localeCompare(b.brand));
        if (this.orderBy == "Price") {
          console.log("setting price order by");
          this.deviceDetailList = this.deviceDetailList.sort((a, b) => {
            if (a.price < b.price)
              return -1
            else
              return 1;
            return 0;

          });
        }

      }
      this.totalRecords = this.deviceDetailList.length;
    }

  }
  clearFilter() {
    this.toPrice = 0;
    this.fromPrice = 0;
    this.orderBy = "";

    this.deviceDetailList = this.orginalDeviceDetailList.sort((a, b) => {
      if (a.deviceModelId > b.deviceModelId)
        return 1;
      else
        return -1;
      return 0;

    });
    this.totalRecords = this.deviceDetailList.length;
  }

  deleteDevice(id: string): void {
    // delete
  }

  editDevice(id: string): void {
    // edit
  }

}
