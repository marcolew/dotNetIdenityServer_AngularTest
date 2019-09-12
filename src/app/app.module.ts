import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import {
  SideNavOuterToolbarModule,
  SideNavInnerToolbarModule,
  SingleCardModule
} from "./layouts";
import { FooterModule, LoginFormModule } from "./shared/components";
import { ScreenService, AppInfoService } from "./shared/services";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { OAuthModule } from "angular-oauth2-oidc";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    LoginFormModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [ScreenService, AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
