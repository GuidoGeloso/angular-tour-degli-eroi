import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EroeServiceService } from '../eroe-service.service';
import { Eroe } from '../eroi/eroe';

@Component({
  selector: 'app-dettaglio-eroe',
  standalone: true,
  imports: [],
  templateUrl: './dettaglio-eroe.component.html',
  styleUrl: './dettaglio-eroe.component.css'
})
export class DettaglioEroeComponent {

  eroeDaVisualizzare!: Eroe;

  constructor(
    private servizioEroi : EroeServiceService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const idAsString = this.route.snapshot.paramMap.get('id');
    //converto in numero
    const id = idAsString != null ? +idAsString : 0;

    this.servizioEroi.getEroe(id).subscribe(
      eroeRicevuto => 
          this.eroeDaVisualizzare = eroeRicevuto
    );
  }

}
