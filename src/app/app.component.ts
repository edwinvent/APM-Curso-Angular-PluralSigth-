import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand"> {{ title }}</a>
      <ul class="nav nav-pills">
        <li>
          <a class="nav-link btn-primary" routerLink="/wellcome">Home</a>
        </li>
        <li>
          <a class="nav-link btn-primary" routerLink="/products"
            >Product List</a
          >
        </li>
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = 'Acme Product Management';
  showImage = false;

  toggleImage(): void {
    this.showImage = true;
  }
}
