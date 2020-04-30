import { Routes } from '@angular/router';
import { PierreBatignesBioComponent } from './pierre-batignes-bio/pierre-batignes-bio.component'
import { AnaisComponent } from './anais/anais.component';

export const ROUTES: Routes = [
    { path: 'pierre', component: PierreBatignesBioComponent },
    { path: 'anais', component: AnaisComponent}
];
