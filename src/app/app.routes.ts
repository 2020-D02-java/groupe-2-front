import { Routes } from '@angular/router';
import { PierreBatignesBioComponent } from './pierre-batignes-bio/pierre-batignes-bio.component'
import { VincentGComponent } from './vincent-g/vincent-g.component';
import { AnaisComponent } from './anais/anais.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
export const ROUTES: Routes = [
    { path: 'pierre', component: PierreBatignesBioComponent },
    { path: 'vincent', component: VincentGComponent },
    { path: 'anais', component: AnaisComponent },
    { path: 'accueil', component: PageAccueilComponent }

];
