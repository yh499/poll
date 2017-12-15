import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ShowComponent } from './show/show.component';
import { CreateComponent } from './create/create.component';
import { VoteComponent } from './vote/vote.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShowComponent,
    CreateComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
