import { Component } from 'angular2/core';
import { HeroListComponent } from './avengers/hero-list.component';

@Component({
    selector:'super-app',
    template: `<div>
                     <h1>{{pageTitle}}</h1>
                     <super-heroes></super-heroes>
               </div>`,
    directives:[HeroListComponent]
})
export class AppComponent {
    public pageTitle: string = "Angular Avengers";
}