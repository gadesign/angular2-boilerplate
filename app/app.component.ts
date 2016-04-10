import { Component } from 'angular2/core';

@Component({
    selector:'ng-app',
    template:`
    <div><h1>{{ pageTitle }}</h1></div>
    `,
    directives: [ProductListComponent]
})

export class AppComponent {
    pageTitle: string = 'Good Answer Design';
}