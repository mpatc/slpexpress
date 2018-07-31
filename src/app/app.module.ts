import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { TokensComponent } from './tokens/tokens.component';
import { FormsModule } from '@angular/forms';
import { TokenDetailComponent } from './token-detail/token-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http/';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { TokenSearchComponent } from './token-search/token-search.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
// to serve up fake data. only for front end devwork
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    TokensComponent,
    TokenDetailComponent,
    MessagesComponent,
    TokenSearchComponent
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
