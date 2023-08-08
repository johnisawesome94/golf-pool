import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SnackBarService {
  private readonly snackBarDuration = 5000;

  constructor(private _snackBar: MatSnackBar) {}

  public openSnackBar(message: string) {
    this._snackBar.dismiss();
    this._snackBar.open(message, null, {
      duration: this.snackBarDuration,
    });
  }
}
