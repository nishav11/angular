import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';

import { ImageService } from './image.service';

import { MatButtonModule,MatMenuModule,MatToolbarModule,MatIconModule,MatCardModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material';
import { MasonryModule } from 'angular2-masonry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     MatButtonModule,
     MatMenuModule,
     MatToolbarModule,
     MatIconModule,
     MatCardModule,
     MatFormFieldModule,
    MatInputModule,
    MasonryModule,
    MatProgressBarModule,
    BrowserAnimationsModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
