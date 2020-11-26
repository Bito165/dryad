import { Component, OnInit } from '@angular/core';
import { SensorService } from 'src/services/sensors/sensor.service';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {
  sensors:Array<{id:number, name:string, latitude:number, longitude:number}> = [];
  constructor(private sensorService:SensorService) { }

  ngOnInit(): void {
    this.getSensors();
  }

  getSensors(){
    this.sensorService.getAllSensors().subscribe(
      res => {
        this.sensors = res;
      }
    )
  }

}
