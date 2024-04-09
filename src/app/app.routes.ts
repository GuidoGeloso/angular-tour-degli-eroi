import { Routes } from '@angular/router';
import { EroiComponent } from './eroi/eroi.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DettaglioEroeComponent } from './dettaglio-eroe/dettaglio-eroe.component';

export const routes: Routes = [
    {
        path: 'eroi', component: EroiComponent
    },
    {
        path: 'dashboard', component: DashboardComponent
    },
    {
        path: 'dettaglioEroe/:id', component: DettaglioEroeComponent
    }


];
