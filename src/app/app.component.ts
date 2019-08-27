import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-firebase-app';

  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyCy27RLhxZUR0CEBABrjjxEeAEwXceadG8",
      authDomain: "fir-projet-d528d.firebaseapp.com",
      databaseURL: "https://fir-projet-d528d.firebaseio.com",
      projectId: "fir-projet-d528d",
      storageBucket: "gs://fir-projet-d528d.appspot.com",
      messagingSenderId: "967776803869",
      appId: "1:967776803869:web:1c0039651db96ac5"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  }
}
