import { Component } from '@angular/core';
import {Eroe} from './eroe';
import {FormsModule} from '@angular/forms';
import {fintiEroi} from './../finti-eroi';
import {CommonModule} from '@angular/common';
import {NgFor} from '@angular/common';
import {NgIf} from '@angular/common';
import { EroeServiceService } from '../eroe-service.service';
import { Subscription } from 'rxjs';
import { NotificheService } from '../notifiche.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-eroi',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, RouterModule],
  templateUrl: './eroi.component.html',
  styleUrl: './eroi.component.css'
})
export class EroiComponent {

  eroi!: Eroe[];

  eroiSubscription!: Subscription;

  currentEroe!: Eroe;

  constructor(
    private eroeService: EroeServiceService,
    private notificheService: NotificheService

  ) { }

  eroeSelezionato:Eroe = {
    id: 1,
    nome: 'Poppolo'
  }

  ngOnInit(): void{
    this.eroiSubscription = this.eroiSubscription = this.eroeService.getEroi().subscribe(
      eroiReturned => this.eroi = eroiReturned
    );
  }

  onEroeSelect(eroe: Eroe): void{

    console.log('Selezionato ' + eroe.id + ' ' +eroe.nome)
    this.eroeSelezionato = eroe;
    this.currentEroe = {
      id: fintiEroi[fintiEroi.length-1].id + 1, nome: this.eroeSelezionato.nome
    };
    
    fintiEroi.push(this.currentEroe);
    this.notificheService.aggiungiNotifica('Aggiunto:' + this.currentEroe.nome + ' con ID ' + this.currentEroe.id);
    console.log(this.currentEroe.id);
    
  }

  ngOnDestroy(): void {
    this.eroiSubscription.unsubscribe();
  }

}


