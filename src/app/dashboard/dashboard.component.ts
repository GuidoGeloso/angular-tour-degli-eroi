import { Component } from '@angular/core';
import { EroeServiceService } from '../eroe-service.service';
import { Eroe } from '../eroi/eroe';
import {NgFor} from '@angular/common';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {

  miglioriEroi!: Eroe[];

  constructor(private eroiService: EroeServiceService){  }

  ngOnInit(): void{
    this.eroiService.getEroi().subscribe(
      eroiArrivati => this.miglioriEroi = eroiArrivati.slice(1,3)
    )
  }
}
