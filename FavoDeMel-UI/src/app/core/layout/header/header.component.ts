import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private notification: NotificationService) { }

  ngOnInit(): void {
  }

}
