import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IoboardComponent } from './ioboard/ioboard.component';
import { IocreateComponent } from './iocreate/iocreate.component';
import { IoeditorComponent } from './ioeditor/ioeditor.component';
import { LoginsComponent } from './logins/logins.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'logins',
    pathMatch: 'full'
  },{
    path: 'logins',
    component: LoginsComponent
  },{
    path: 'ioboard',
    component: IoboardComponent
  },{
    path: 'iocreate',
    component: IocreateComponent
  },{
    path: 'ioeditor/:username',
    component: IoeditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
