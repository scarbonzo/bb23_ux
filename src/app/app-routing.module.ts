import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { EditorComponent } from './editor/editor.component';
import { IoboardComponent } from './ioboard/ioboard.component';
import { IocreateComponent } from './iocreate/iocreate.component';
import { IoeditorComponent } from './ioeditor/ioeditor.component';
import { LoginsComponent } from './logins/logins.component';
import { CreateComponent } from './create/create.component';

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
  },{
    path: 'board',
    component: BoardComponent
  },{
    path: 'editor/:username',
    component: EditorComponent
  },{
    path: 'create',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
