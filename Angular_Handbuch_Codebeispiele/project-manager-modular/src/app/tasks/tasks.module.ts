import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared-module';
import {SuperSecretCalculationService} from '../super-secret-calculation.service';
import {TasksComponent} from "./tasks.component";
import {TaskListComponent} from "./task-list/task-list.component";
import {TaskItemComponent} from "./task-list/task-item.component";
import {EditTaskComponent} from "./edit-task/edit-task.component";
import {TaskOverviewComponent} from "./task-overview/task-overview.component";
import {RouterModule, Routes} from "@angular/router";
import {LoginGuard} from "../login";
import {EditTaskGuard} from "./edit-task/edit-task.guard";

export const tasksRoutes: Routes = [{
  path: '', canActivate: [LoginGuard], component: TasksComponent,
  children: [
    {
      path: '',
      component: TaskListComponent
    },
    {
      path: 'edit/:id', component: EditTaskComponent,
      data: {title: 'Aufgabe bearbeiten'},
      canDeactivate: [EditTaskGuard]
    },
    {
      path: 'new', component: EditTaskComponent,
      data: {title: 'Neue Aufgabe anlegen'},
      canDeactivate: [EditTaskGuard]
    }
  ]
},
  {
    path: 'overview/:id',
    component: TaskOverviewComponent,
    outlet: 'right'
  }];


@NgModule({
  imports: [ReactiveFormsModule, SharedModule, RouterModule.forChild(tasksRoutes)],
  declarations: [
    TasksComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskItemComponent,
    TaskOverviewComponent,
    EditTaskComponent
  ],
  providers: [SuperSecretCalculationService]
})
export class TasksModule {
}
