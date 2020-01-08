import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicsRoutingModule } from './basics-routing.module';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import { InputFormatDirective } from './directives-example/custom-directive/input-format.directive';
import { BasicsComponent } from './basics.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { SummaryPipe } from './pipe-example/summary.pipe';
import { Child1Component } from './parent-child/child1/child1.component';
import { Child2Component } from './parent-child/child2/child2.component';
import { MyChild1Component } from './shared-service/my-child1/my-child1.component';
import { MyChild2Component } from './shared-service/my-child2/my-child2.component';
import { MyHomeComponent } from './shared-service/my-home/my-home.component';
import { ParentComponent } from './parent-child/parent/parent.component';


@NgModule({
  declarations: [
    DirectivesExampleComponent,
    BasicsComponent,
    InputFormatDirective,
    PipeExampleComponent,
    SummaryPipe,
    Child1Component,
    Child2Component,
    MyChild1Component,
    MyChild2Component,
    MyHomeComponent,
    ParentComponent
  ],
  imports: [
    CommonModule,
    BasicsRoutingModule,

  ],
  exports:[

  ]
})
export class BasicsModule { }
