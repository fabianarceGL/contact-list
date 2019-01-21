import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfirmDialogService } from '../confirm-dialog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.sass']
})
export class ConfirmDialogComponent implements OnInit, OnDestroy {

  title: string = 'Delete Contact'
  subTitle: string = 'Please confirm you want to delete this contact'
  show: boolean = false;
  dialogDisplaySubscription: Subscription;

  constructor(private confirmDialogService: ConfirmDialogService) { }

  ngOnInit() {
    this.dialogDisplaySubscription = this.confirmDialogService.onDialogDisplay.subscribe(
      (display: boolean) => {
        this.show = display;
      }
    )
  }
  
  onConfirm() {
    this.confirmDialogService.confirmFunction();
    this.show = false;
  }

  onCancel() {
    this.confirmDialogService.cancelFunction();
    this.show = false;
  }

  ngOnDestroy(): void {
    this.dialogDisplaySubscription.unsubscribe();
  }
}
