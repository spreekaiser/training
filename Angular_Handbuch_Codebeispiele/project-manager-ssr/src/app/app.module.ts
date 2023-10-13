import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule, BrowserTransferStateModule, Title } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { appRouting, routingComponents } from "./app.routing";
import { AUTH_ENABLED, SOCKET_IO } from "./app.tokens";
import { LoginService } from "./services/login-service/login-service";
import { SharedModule } from "./shared/shared-module";
import { CacheModule } from './cache/cache.module';
import {ApplicationConfigService} from './services/application-config/application-config.service';
import { io } from 'socket.io-client';


export function socketIoFactory() {
  return io;
}

export function initializeApplication(applicationConfigService: ApplicationConfigService) {
  return () => applicationConfigService.loadConfig();
}

const enableAuthentication = false;

@NgModule({
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), BrowserTransferStateModule, SharedModule, CacheModule.forRoot('session-storage'), appRouting],
  providers: [
    LoginService,
    Title,
    { provide: AUTH_ENABLED, useValue: enableAuthentication },
    { provide: SOCKET_IO, useFactory: socketIoFactory },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApplication,
      multi: true,
      deps: [ApplicationConfigService]
    },
  ],
  declarations: [AppComponent, routingComponents],
  bootstrap: [AppComponent],
})
export class AppModule { }
