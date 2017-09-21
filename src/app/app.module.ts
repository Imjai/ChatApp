import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { AuthProvider } from '../providers/auth/auth';
import { UserProvider } from '../providers/user/user';
import { ImghandlerProvider } from '../providers/imghandler/imghandler';
import { RequestsProvider } from '../providers/requests/requests';
import { ChatProvider } from '../providers/chat/chat';
import { GroupsProvider } from '../providers/groups/groups';

var config = {
  apiKey: "AIzaSyA7a5zrFb5eDiK5XKKpFPnq6wcVEJTw1u4",
  authDomain: "chatapp-b746c.firebaseapp.com",
  databaseURL: "https://chatapp-b746c.firebaseio.com",
  projectId: "chatapp-b746c",
  storageBucket: "chatapp-b746c.appspot.com",
  messagingSenderId: "140345426917"
  };
  var database = firebase.database();
@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {tabsPlacement: 'top'}),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    FilePath,
    FileChooser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AngularFireAuth,
    UserProvider,
    ImghandlerProvider,
    UserProvider,
    RequestsProvider,
    ChatProvider,
    GroupsProvider
  ]
})
export class AppModule {}
