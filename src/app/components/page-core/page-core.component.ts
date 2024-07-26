import { Component } from '@angular/core';
import { FooterComponent, HeaderComponent } from '@components';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-page-core',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    MatSidenavModule,
    MatButtonModule
  ],
  templateUrl: './page-core.component.html',
  styleUrl: './page-core.component.scss'
})
export class PageCoreComponent {

}
