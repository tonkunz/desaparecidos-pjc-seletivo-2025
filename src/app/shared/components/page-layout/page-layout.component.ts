import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalHeaderComponent } from '@shared/components/global-header/global-header.component';
import { FooterComponent } from '@shared/components/footer/footer.component';

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
