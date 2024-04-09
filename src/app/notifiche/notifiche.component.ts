import { Component } from '@angular/core';
import { NotificheService } from '../notifiche.service';
import {NgFor} from '@angular/common';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-notifiche',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './notifiche.component.html',
  styleUrl: './notifiche.component.css'
})
export class NotificheComponent {

  displayNotifiche : boolean = false;
  noNotifiche : boolean = true;

  constructor(public notificheService : NotificheService){}
}
