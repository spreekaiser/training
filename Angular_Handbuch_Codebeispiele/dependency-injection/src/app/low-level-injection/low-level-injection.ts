import {ReflectiveInjector, Inject} from '@angular/core';
import {RANDOM_VALUE} from './random-value-token';

interface LoginData {
  username: string;
  password: string;
}

class LoginService {
  login(loginData: LoginData) {
    console.log('Executing login with data', loginData);
  }
}

class OAuthLoginService {
  login(loginData: LoginData) {
    console.log('Executing oauth-login with data', loginData);
  }
}

class LoginComponent {

  loginService: LoginService;
  greeting: string;

  constructor(@Inject(LoginService) loginService: LoginService,
              @Inject('greeting') greeting: string,
              @Inject(RANDOM_VALUE) randomValue: number) {
    this.loginService = loginService;
    this.greeting = greeting;
    console.log(`Der zufällige Wert lautet ${randomValue}`);
  }

  submit(loginData: LoginData) {
    this.loginService.login(loginData);
    alert(this.greeting + ' ' + loginData.username);
  }
}

export function generateRandomValue() {
  return Math.floor(Math.random() * 101);
}

export function getLoginService(useOAuth: boolean) {
  if (useOAuth) {
    return new OAuthLoginService();
  } else {
    return new LoginService();
  }
}

export function executeInjection() {

  const injector = ReflectiveInjector.resolveAndCreate([
    OAuthLoginService, LoginComponent,
    {provide: 'greeting', useValue: 'Howdy'},
    {provide: 'ENABLE_OAUTH', useValue: true},
    {provide: LoginService, useFactory: getLoginService,
                             deps: ['ENABLE_OAUTH']
    },
    // {provide: LoginService, useClass: OAuthLoginService},
    {provide: 'currentLoginService', useExisting: LoginService},

    {provide: RANDOM_VALUE, useFactory: generateRandomValue}
  ]);

  const loginComponent = injector.get(LoginComponent);
  loginComponent.submit({username: 'chris', password: 's3cret'});

}
