import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/app.HeaderComponent';
import { NavComponent } from './nav/app.Navcomponent';
import { ContentAreaComponent } from './content-area/content-area.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
     HeaderComponent,
     NavComponent, ContentAreaComponent,
     FooterComponent,
     AboutComponent,
     ContactComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   RouterModule.forRoot([
      {
        path: 'about',
        component: AboutComponent
      },
      {
          path: 'contact',
          component: ContactComponent
      },
      {
        path: '',
        component: ContentAreaComponent
    }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


