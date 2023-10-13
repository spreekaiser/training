import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {SettingsComponent} from './settings/settings.component';
import {AboutComponent} from './about/about.component';
import {LoginComponent, LoginGuard} from './login/index';
import {NotFoundComponent} from './not-found/not-found.component';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CustomValidatorsModule} from "./shared/custom-validators/custom-validators.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "./shared/shared-module";
import {TasksModule} from "./tasks/tasks.module";
// import {TasksModule} from './tasks/tasks.module';

//function loadTasksModule() {
// return TasksModule;
//}

export const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, data: {title: 'Startseite'}},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'settings', component: SettingsComponent, data: {title: 'Einstellungen'}},
  {path: 'about', component: AboutComponent, data: {title: 'Über uns'}},
  {path: 'login', component: LoginComponent},
  {
    path: 'tasks',
    loadChildren: () => import('./tasks/tasks.module').then((m) => m.TasksModule),
    canLoad: [LoginGuard]
  },
  // {path: 'tasks', loadChildren: loadTasksModule, canLoad: [LoginGuard]},
  /** Redirect Konfigurationen **/
  {path: 'tasks/*', redirectTo: '/tasks'},
  {path: '404', component: NotFoundComponent},

  {path: '**', redirectTo: '/404'}, // immer als letztes konfigurieren - erste Route die matched wird angesteuert
];

@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AboutComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  imports: [
    SharedModule, RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
