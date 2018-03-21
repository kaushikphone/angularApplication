import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div>
        <div class='container-fluid'>
            <router-outlet></router-outlet>
        </div>
     </div>
    `
})
export class AppComponent {
  pageTitle: string = 'Employee List Management';
}
