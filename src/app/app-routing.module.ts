import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokensComponent } from './tokens/tokens.component';

const routes: Routes = [
  {path: 'tokens', component: TokensComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
