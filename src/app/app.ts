import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Header],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <p>Hello world!</p>
    <app-header />
    <app-home />

    <router-outlet />
  `,
  styles: [`p {color:red}`],
})
export class App {
  protected title = 'first-ng-app';
}
