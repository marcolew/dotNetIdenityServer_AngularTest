import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";
import { OAuthService } from "angular-oauth2-oidc";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private oauthService: OAuthService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return true;
  }

  // canActivate(route: ActivatedRouteSnapshot): boolean {
  //  const isLoggedIn = this.oauthService.hasValidAccessToken();
  // const isLoginForm = route.routeConfig.path === "login-form";

  // if (isLoggedIn && isLoginForm) {
  //    this.router.navigate(["/"]);
  //    return false;
  //  }

  // if (!isLoggedIn && !isLoginForm) {
  //   this.router.navigate(["/login-form"]);
  // }

  // return isLoggedIn || isLoginForm;
  //}
}
