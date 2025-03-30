import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-404-not-found',
  templateUrl: './404-not-found.component.html',
  standalone: true,
  imports: [ RouterLink ]
})
export class NotFoundComponent { }
