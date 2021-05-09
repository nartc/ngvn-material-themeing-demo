import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatBadgeModule} from "@angular/material/badge";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import { KitchenSinkComponent } from './kitchen-sink.component';



@NgModule({
  declarations: [KitchenSinkComponent],
  imports: [
    CommonModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
  ],
  exports: [KitchenSinkComponent],
})
export class KitchenSinkModule {}
