import { Component } from '@angular/core';
import {  OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { authConfig } from './a2.config';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'a2';
  constructor(private oauthService:OAuthService){
    this.configureSingleSignOn();

  }
  configureSingleSignOn(){
    this.oauthService.configure(authConfig); 
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndLogin();
  }
  
  get token(){
    let claims:any=this.oauthService.getIdentityClaims(); 
    return claims ? claims:null;
  }

  logout(){
    if(confirm('Are you sure you want to logout?')){
    this.oauthService.logOut();

    }
  }
}
