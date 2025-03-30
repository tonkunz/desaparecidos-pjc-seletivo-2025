import { inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AlertComponent } from './alert.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private _snackBar = inject(MatSnackBar);

  defaultConfiguration: MatSnackBarConfig = {
    duration: 5000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
  };

  success(message: string) {
    console.log('teste');

    this._snackBar.openFromComponent(AlertComponent, {
      ...this.defaultConfiguration,
      data: {
        message,
        icon: 'check_circle'
      },
      panelClass: ['alert-success-snackbar']
    });
  }

  error(message: string) {
    this._snackBar.openFromComponent(AlertComponent, {
      ...this.defaultConfiguration,
      data: { message, icon: 'error' },
      panelClass: ['alert-error-snackbar']
    });
  }
}
