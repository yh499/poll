import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { ShowComponent } from './show/show.component';
import { CreateComponent } from './create/create.component';
import { VoteComponent } from './vote/vote.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: ShowComponent },
  { path: 'create', component: CreateComponent },
  { path: 'poll/:id', component: VoteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
