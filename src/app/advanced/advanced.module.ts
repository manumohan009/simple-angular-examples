import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedRoutingModule } from './advanced-routing.module'
import { InputThreeWaysComponent, BloggerComponent, Posts1Component, Posts2Component, Posts3Component } from './input-three-ways';
import { AdvancedComponent } from './advanced.component';



@NgModule({
  declarations: [
    InputThreeWaysComponent,
    BloggerComponent,
    Posts1Component,
    Posts2Component,
    Posts3Component,
    AdvancedComponent
  ],
  imports: [
    CommonModule,
    AdvancedRoutingModule
  ]
})
export class AdvancedModule { }
