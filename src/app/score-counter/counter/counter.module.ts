import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CounterRoutingModule } from './counter-routing.module';
import { ScoreComponent } from './components/score/score.component';



@NgModule({
  declarations: [ScoreComponent],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    CommonModule,
    CounterRoutingModule,
  ],
  exports: [
    ScoreComponent
  ]
})
export class CounterModule { }
