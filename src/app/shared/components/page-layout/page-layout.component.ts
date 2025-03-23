import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalHeaderComponent } from '../global-header/global-header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'page-layout',
  templateUrl: './page-layout.component.html',
  imports: [
    RouterOutlet,
    GlobalHeaderComponent,
    FooterComponent,
  ]
})
export class PageLayoutComponent { }
