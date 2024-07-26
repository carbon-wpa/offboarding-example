import { Component } from '@angular/core';
import { PageCoreComponent } from './components/page-core/page-core.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PageCoreComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
