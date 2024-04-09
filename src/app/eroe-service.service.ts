import { Injectable } from '@angular/core';
import { fintiEroi } from './finti-eroi';
import { Eroe } from './eroi/eroe';
import { Observable, of } from 'rxjs';
import { NotificheService } from './notifiche.service';

@Injectable({
  providedIn: 'root'
})
export class EroeServiceService {

  getEroi(): Observable<Eroe[]>{
    this.notificheService.aggiungiNotifica('Nuovi Eroi Aggiunti!');
    return of(fintiEroi);
  }

  addEroe(eroeAggiunto : Eroe): void{
    fintiEroi.push(eroeAggiunto);
  }

  constructor(private notificheService: NotificheService) { }
}
