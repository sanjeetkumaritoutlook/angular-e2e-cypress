# AngularE2eCypress

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.13.

Setup angular 17 app, without global cli version conflict:

npx @angular/cli@17 new my-app

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running end-to-end tests

npm run e2e 

npx cypress open

(it automatically picks cy.ts files from cypress/e2e folder)

You can skip a specific test file like this:

npx cypress run --exclude 'cypress/e2e/user-grid.cy.ts'

directly run a file:

npx cypress run --spec 'cypress/e2e/home.cy.ts'


Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## What specPattern does:

It tells Cypress to look for test files that match this pattern:

cypress/e2e/**/*.cy.{js,ts}



## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
