import { Injectable } from '@angular/core';
import { EroeServiceService } from './eroe-service.service';

@Injectable({
  providedIn: 'root'
})
export class NotificheService {

  notifiche: string[] = [];

  aggiungiNotifica(notifica: string): void{
    console.log('Aggiunta notifica');
    this.notifiche.push(notifica);
  }

  cancellaNotifiche(): void{
    this.notifiche = [];
  }

  hasNotifiche(): boolean{
    return this.notifiche.length > 0;
  }

  constructor() { }

}
