import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { EroiComponent } from './eroi/eroi.component';
import { NotificheComponent } from './notifiche/notifiche.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, EroiComponent, NotificheComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tour-degli-eroiz';
  anotherVar = 'myValue';
}
