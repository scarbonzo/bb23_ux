import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginsComponent } from './logins/logins.component';
import { HttpClientModule } from '@angular/common/http';
import { IoboardComponent } from './ioboard/ioboard.component';
import { IoeditorComponent } from './ioeditor/ioeditor.component';
import { IocreateComponent } from './iocreate/iocreate.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginsComponent,
    IoboardComponent,
    IoeditorComponent,
    IocreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
