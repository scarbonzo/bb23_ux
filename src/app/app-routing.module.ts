import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IoboardComponent } from './ioboard/ioboard.component';
import { IoeditorComponent } from './ioeditor/ioeditor.component';
import { LoginsComponent } from './logins/logins.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'logins',
    pathMatch: 'full'
  },
  {
    path: 'logins',
    component: LoginsComponent
  },
  {
    path: 'ioboard',
    component: IoboardComponent
  }
  ,
  {
    path: 'ioeditor',
    component: IoeditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
