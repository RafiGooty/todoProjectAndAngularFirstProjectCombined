import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { AutoFocusDirective } from './auto-focus.directive';

@NgModule({
  declarations:[
    TodoTaskComponent,
    AutoFocusDirective
  ],
  imports:[
    FormsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule,
    CommonModule
  ]
})
export class TodoModule{}
