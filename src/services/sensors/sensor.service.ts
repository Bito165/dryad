import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  baseUrl:string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getAllSensors(){
    return this.http.get(this.baseUrl + 'items/sensor_node', {withCredentials: true}).pipe(
      map(
        res => {
          return res['data'];
        }
      )
    )
  }

}
