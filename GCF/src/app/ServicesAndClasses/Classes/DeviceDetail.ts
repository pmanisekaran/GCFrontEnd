export class DeviceDetail {

  constructor() { this.Clear(); }
  Clear() {
    this.deviceModelId = "";
    this.computerType = "Desktop PC";
    this.processor = "Intel";
    this.usbPorts = 3;
    this.ramSlots = 4;
    this.formFactor = "Mid-Tower";
    this.quantity = 100;
    this.screenSize = 13;
    this.formFactor="mid-tower";
    this.price=9899;
  }

  brand: string;
  computerType: string;
  deviceModelId: string;
  formFactor: string;//Full tower, mid-tower, and mini-ITX
  operatingSystem: string;
  osVersion: string;
  price: number;
  processor: string;
  quantity: number;
  ramSlots: number;
  screenSize: number;
  usbPorts: number


}