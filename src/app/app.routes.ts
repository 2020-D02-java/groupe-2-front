import { Routes } from '@angular/router';
import { PierreBatignesBioComponent } from './pierre-batignes-bio/pierre-batignes-bio.component'
import { VincentGComponent } from './vincent-g/vincent-g.component';
import { AnaisComponent } from './anais/anais.component';
<<<<<<< HEAD
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
=======
import { JonathanBioComponent } from './jonathan-bio/jonathan-bio.component';
>>>>>>> e3f07dfda8639e47f454671e01f671f88375e207
export const ROUTES: Routes = [
    { path: 'pierre', component: PierreBatignesBioComponent },
    { path: 'vincent', component: VincentGComponent },
    { path: 'anais', component: AnaisComponent },
    { path: 'accueil', component: PageAccueilComponent }

<<<<<<< HEAD
=======
    { path: 'anais', component: AnaisComponent},

    { path: 'jonathan', component: JonathanBioComponent},

>>>>>>> e3f07dfda8639e47f454671e01f671f88375e207
];
