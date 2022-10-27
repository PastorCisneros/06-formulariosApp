import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReativeRoutingModule } from './reative-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';


@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    ReativeRoutingModule
  ]
})
export class ReativeModule { }
