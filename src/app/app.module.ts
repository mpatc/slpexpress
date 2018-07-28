import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { TokensComponent } from './tokens/tokens.component';
import { FormsModule } from '@angular/forms';
import { TokenDetailComponent } from './token-detail/token-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TokensComponent,
    TokenDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
