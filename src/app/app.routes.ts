import { Routes } from '@angular/router';
import { PierreBatignesBioComponent } from './pierre-batignes-bio/pierre-batignes-bio.component'
import { VincentGComponent } from './vincent-g/vincent-g.component';

export const ROUTES: Routes = [
    { path: 'pierre', component: PierreBatignesBioComponent },
    { path: 'vincent', component: VincentGComponent },
];