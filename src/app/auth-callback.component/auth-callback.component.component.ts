// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';


// @Component({
//   selector: 'app-auth-callback.component',
//   templateUrl: './auth-callback.component.component.html',
// })
// export class AuthCallbackComponent implements OnInit {

//   constructor(private router:Router) { }

//   ngOnInit() {

//     let lastUrl =   sessionStorage.getItem('lastUrl');
//     let urlToRedirect = lastUrl!=null? lastUrl: '/home';

//     if(sessionStorage.getItem(AppConstants.OIDC.STAGE)!=null && sessionStorage.getItem(AppConstants.OIDC.STAGE) == AppConstants.AUTHENTICATION_STAGES.COMPLETE_AUTHENTICATION){
//       this.router.navigate([urlToRedirect]);
//     }
//     else if(sessionStorage.getItem(AppConstants.OIDC.STAGE)!=null && sessionStorage.getItem(AppConstants.OIDC.STAGE) == AppConstants.AUTHENTICATION_STAGES.SIGNED_OUT){
//       this.router.navigate(['sign-out']);
//     }
//     else if(sessionStorage.getItem(AppConstants.OIDC.STAGE)!=null && sessionStorage.getItem(AppConstants.OIDC.STAGE) == AppConstants.AUTHENTICATION_STAGES.STARTED_AUTHENTICATION){
        
//       });
//     }


// }
