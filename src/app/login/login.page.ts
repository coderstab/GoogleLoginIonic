import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {GoogleAuth} from "@codetrix-studio/capacitor-google-auth";
import { isPlatform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = null;

  constructor(public router:Router) {
    if(!isPlatform('capacitor')){
      GoogleAuth.initialize();
    }
   }


   async signIn(){
     this.user = await GoogleAuth.signIn();
     console.log("user", this.user);
     if(this.user != null ){
      this.router.navigateByUrl('dashboard');
     }
     //  this.router.navigateByUrl('dashboard');

   }

  ngOnInit() {
    
  }

  dashboard(){
    
 }

}
