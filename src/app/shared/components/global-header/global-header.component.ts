import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'global-header',
  templateUrl: './global-header.component.html',
  standalone: true,
  imports: [
    RouterLink
  ]
})
export class GlobalHeaderComponent { }
