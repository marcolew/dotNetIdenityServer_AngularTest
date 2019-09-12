import { Component, HostBinding } from "@angular/core";
import { ScreenService, AppInfoService } from "./shared/services";
import { OAuthService } from "angular-oauth2-oidc";
import { JwksValidationHandler } from "angular-oauth2-oidc";
import { authConfig } from "./auth.config";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  @HostBinding("class") get getClass() {
    return Object.keys(this.screen.sizes)
      .filter(cl => this.screen.sizes[cl])
      .join(" ");
  }

  constructor(
    private oauthService: OAuthService,
    private screen: ScreenService,
    public appInfo: AppInfoService
  ) {
    this.configure();
  }

  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
