import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MarketComponent } from './market/market.component';
import { CollectionComponent } from './collection/collection.component';
import { CollectableService } from './shared/collectables.service';
import { HeaderComponent } from './header.component';
import {routing} from './app.rounting' ;


@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    CollectionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [CollectableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
