# OcisApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

API:
C:\Users\kleki\Source\Repos\OcisAngular\WebApp>dotnet watch run

App:
OLD - C:\Users\kleki\Source\Repos\OcisAngular\WebApp>ng serve --proxy-config proxy.config.json

NEW-
As were building service worker with sw-precache, run app using:
  1: ng build --prod
  2: npm run sw 
  3: npm run static-serve

This proxy contains the url of the API

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
