import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import { BasicsComponent } from './basics.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { MyHomeComponent } from './shared-service/my-home/my-home.component';



const routes: Routes = [
  {
    path:'',
    component: BasicsComponent,
    children: [
      {
        path:'directives-example',
        component: DirectivesExampleComponent
      },
      {
        path: 'pipe-example',
        component: PipeExampleComponent

      },
      {
        path: 'parent',
        component: ParentComponent
      },
      {
        path: 'shared-service',
        component: MyHomeComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicsRoutingModule { }
