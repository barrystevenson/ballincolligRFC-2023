import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { USE_EMULATOR as USE_FIRESTORE_EMULATOR, SETTINGS as USE_FIRESTORE_SETTINGS, } from '@angular/fire/compat/firestore';
//import { USE_FIRESTORE_SETTINGS} from '/firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


@NgModule({
  declarations: [AppComponent],
  //entryComponents: [],
  imports: [BrowserModule, 
            IonicModule.forRoot(), 
            AppRoutingModule
    ],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
