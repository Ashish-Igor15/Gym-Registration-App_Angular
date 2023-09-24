import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {path: '', redirectTo:'register', pathMatch:'full'},
  {path: 'register', component: CreateComponent},
  { path: 'update/:id', component: CreateComponent },
  { path: 'detail/:id', component: UserDetailComponent },
  {path:'list', component: RegistrationListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
