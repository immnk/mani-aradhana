import { InjectionToken } from "@angular/core";

/**
 * AppConfig is the interface that defines what configurations you want to provide to the application.
 * This file is implemented as suggested by angular in https://angular.io/guide/dependency-injection#injector-providers
 */
export interface AppConfig {
  appName: string;
  endPoint: string;
  validate: string;
  getAllEvents: string;
}

/**
 * Actual implementation of the AppConfig is defined here
 */
export const APP_DI_CONFIG: AppConfig = {
  appName: 'Aradhana',
  endPoint: "https://us-central1-aradhana-api.cloudfunctions.net/app",
  validate: "/validate?passkey=",
  getAllEvents: "/events?permission="
}

/**
 * This token tells the Dependency injector as to what type of app config is going to be injected.
 * It is easy to think that the type of the injector is going to be AppConfig
 * but that would not work because interfaces are not types in javascript.
 * so we need a type(token) for the config file to be injected.
 * More information is found here : https://angular.io/guide/dependency-injection#injection-token
 * @param  {InjectionToken} 'app.config' sample description about the InjectionToken that is createFromData
 * @return {void}           a new injected token that can identify this AppConfig
 */
export const APP_CONFIG_TOKEN = new InjectionToken<AppConfig>('app.config');
