import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { FormsModule } from '@angular/forms'

var firebaseConfig = {
  apiKey: "AIzaSyAe0b9m4h0JKJaPwHQcqsBlxSCWkoTYfWs",
  authDomain: "firestore-dbcb6.firebaseapp.com",
  databaseURL: "https://firestore-dbcb6.firebaseio.com",
  projectId: "firestore-dbcb6",
  storageBucket: "",
  messagingSenderId: "408073988429"
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
