import { Routes } from '@angular/router';
import { PierreBatignesBioComponent } from './pierre-batignes-bio/pierre-batignes-bio.component'
import { VincentGComponent } from './vincent-g/vincent-g.component';
import { AnaisComponent } from './anais/anais.component';
import { JonathanBioComponent } from './jonathan-bio/jonathan-bio.component';
export const ROUTES: Routes = [
    { path: 'pierre', component: PierreBatignesBioComponent },

    { path: 'vincent', component: VincentGComponent },

    { path: 'anais', component: AnaisComponent},

    { path: 'jonathan', component: JonathanBioComponent},

];
