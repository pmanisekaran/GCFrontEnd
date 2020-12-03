import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeviceDetail } from '../Classes/DeviceDetail';

@Injectable({
  providedIn: 'root'
})
export class DeviceListService {

   url: string = 'https://localhost:44304/device';
  constructor(private http: HttpClient) { }

getDeviceList(){
    return this.http.get<DeviceDetail[]>(this.url);
}
saveDevice(dd:DeviceDetail)
{
  //code here
}

}
