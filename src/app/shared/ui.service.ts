import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  constructor(private _snackBar: MatSnackBar) {}

  showSnackbar(message, action, duration) {
    this._snackBar.open(message, action, {
      duration: duration
    });
  }
}
