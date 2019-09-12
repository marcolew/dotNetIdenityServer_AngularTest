import { Component, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { AppInfoService } from "../../services";
import { DxButtonModule } from "devextreme-angular/ui/button";
import { DxCheckBoxModule } from "devextreme-angular/ui/check-box";
import { DxTextBoxModule } from "devextreme-angular/ui/text-box";
import { DxValidatorModule } from "devextreme-angular/ui/validator";
import { DxValidationGroupModule } from "devextreme-angular/ui/validation-group";
import { OAuthService } from "angular-oauth2-oidc";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"]
})
export class LoginFormComponent {
  login = "";
  password = "";

  constructor(
    private oauthService: OAuthService,
    public appInfo: AppInfoService
  ) {}

  onLoginClick(args) {
    if (!args.validationGroup.validate().isValid) {
      return;
    }

    this.oauthService.initLoginFlow();

    args.validationGroup.reset();
  }
}
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DxButtonModule,
    DxCheckBoxModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxValidationGroupModule
  ],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent]
})
export class LoginFormModule {}
