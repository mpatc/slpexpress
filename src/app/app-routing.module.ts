import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokensComponent } from './tokens/tokens.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TokenDetailComponent } from './token-detail/token-detail.component';

const routes: Routes = [
  {path: 'tokens', component: TokensComponent},
  {path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:shortname', component: TokenDetailComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
