import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './component/profile/profile.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { AuthGuard } from './utility/app.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/welcome',
    pathMatch:'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }