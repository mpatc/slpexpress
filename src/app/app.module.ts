import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { ChartsModule } from 'ng2-charts';
import { TooltipModule, TabsModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';




@NgModule({
  imports: [
    ChartsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
// to serve up fake data. only for front end devwork
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    TabsModule.forRoot()
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
