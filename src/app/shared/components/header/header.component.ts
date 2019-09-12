import {
  Component,
  NgModule,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserPanelModule } from "../user-panel/user-panel.component";
import { DxButtonModule } from "devextreme-angular/ui/button";
import { DxToolbarModule } from "devextreme-angular/ui/toolbar";
import { OAuthService } from "angular-oauth2-oidc";

@Component({
  selector: "app-header",
  templateUrl: "header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  @Output()
  menuToggle = new EventEmitter<boolean>();

  @Input()
  menuToggleEnabled = false;

  @Input()
  title: string;

  userMenuItems = [
    {
      text: "Login",
      icon: "user",
      onClick: () => {
        console.log(this.oauthService.authorizationHeader());
        this.oauthService.initImplicitFlow();
      }
    },
    {
      text: "Logout",
      icon: "runner",
      onClick: () => {
        console.log(this.oauthService.authorizationHeader());
        console.log(this.oauthService.getAccessToken());
        console.log(this.oauthService.getIdToken());
        this.oauthService.logOut();
      }
    }
  ];

  constructor(private oauthService: OAuthService) {}

  toggleMenu = () => {
    this.menuToggle.emit();
  };
}

@NgModule({
  imports: [CommonModule, DxButtonModule, UserPanelModule, DxToolbarModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {}
