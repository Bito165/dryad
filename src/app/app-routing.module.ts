import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/services/guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { SensorComponent } from './sensor/sensor.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'sensors', canActivate: [AuthGuard], component: SensorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
