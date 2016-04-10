import { Component } from 'angular2/core';

@Component({
    selector:'ng-app',
    template:`
    <h1>{{ pageTitle }}</h1>
    `
})

export class AppComponent {
    pageTitle: string = 'Angular 2 Boilerplate is Working!';
}