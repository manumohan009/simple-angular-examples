import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { DirectivesExampleComponent } from '../basics/directives-example/directives-example.component';

const routes: Routes = [
  {
    path: 'directives-example',
    component: DirectivesExampleComponent

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AdvancedRoutingModule { }
