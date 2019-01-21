import { Component, OnInit } from '@angular/core';
import { ConfirmDialogService } from 'src/app/core/confirm-dialog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  isDialogDisplayed: boolean = false;

  constructor(private confirmDialogService: ConfirmDialogService) { }

  ngOnInit() {
    this.confirmDialogService.onDialogDisplay.subscribe(
      (display => {
        this.isDialogDisplayed = display;
      })
    )
  }
}
