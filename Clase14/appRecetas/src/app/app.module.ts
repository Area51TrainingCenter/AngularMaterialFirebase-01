import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NucleoModule } from './nucleo/nucleo.module';
import { CompartidoModule } from './compartido/compartido.module';

import { AngularFireModule } from "@angular/fire"
import { AngularFirestoreModule } from "@angular/fire/firestore"
import { AngularFireAuthModule } from "@angular/fire/auth"
import { AngularFireStorageModule } from "@angular/fire/storage"
import { AngularFireMessagingModule } from "@angular/fire/messaging"
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NucleoModule,
    CompartidoModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
