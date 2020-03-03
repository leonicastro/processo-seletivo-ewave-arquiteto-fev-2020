import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AlertService } from './alert.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  dismissible = true;
  alerts: any[] = [];

  constructor(
    private alertService: AlertService,
    private snackBar: MatSnackBar) {

    this.alertService.alertChange.subscribe((alert) => {
      alert.id = Math.random().toString();

      this.alerts.push(alert);

      setTimeout(() => {
        this.close(alert);
      }, alert.duration);

      this.snackBar.open(alert.msg, 'Fechar', {
        duration: alert.duration,
      });
    });
  }

  close(dismissedAlert: any): void {
    const alerts = this.alerts.filter((x) => x.id !== dismissedAlert.id);
    this.alerts = [...alerts];
  }

}
