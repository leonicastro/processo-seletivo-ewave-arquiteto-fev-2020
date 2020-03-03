import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alertChange = new Subject<any>();

  mostrarAlert(msg: string) {
    this.alertChange.next({ msg, duration: 4000, id: null });
  }
}
