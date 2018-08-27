import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = 'worker-app';
  constructor(private cdr: ChangeDetectorRef) {}
  changeName(name: string) {
    this.name = name;
  }
}
