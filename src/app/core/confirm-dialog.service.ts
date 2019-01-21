import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  confirmFunction: Function;
  cancelFunction: Function;

  onDialogDisplay: Subject<boolean> = new Subject<boolean>();

  initConfirmDialog(confirmFunction, cancelFunction) {
    this.confirmFunction = confirmFunction;
    this.cancelFunction = cancelFunction;
    this.onDialogDisplay.next(true);
  }
}
