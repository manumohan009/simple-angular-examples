import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { DirectivesExampleComponent } from '../basics/directives-example/directives-example.component';
import { InputThreeWaysComponent } from './input-three-ways/input-three-ways.component';
import { AdvancedComponent } from './advanced.component';

const routes: Routes = [
  {
    path:'',
    component: AdvancedComponent ,
    children: [
      {
        path: 'input-three-ways',
        component: InputThreeWaysComponent

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AdvancedRoutingModule { }
