import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { EditorComponent } from './editor/editor.component';
import { LoginsComponent } from './logins/logins.component';
import { CreateComponent } from './create/create.component';
import { LiveboardComponent } from './liveboard/liveboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'board',
    pathMatch: 'full'
  },{
    path: 'logins',
    component: LoginsComponent
  },{
    path: 'board',
    component: BoardComponent
  },{
    path: 'editor/:username',
    component: EditorComponent
  },{
    path: 'create',
    component: CreateComponent
  },{
    path: 'live',
    component: LiveboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
