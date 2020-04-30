import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthComponent} from './auth/auth.component';
import {TechComponent} from './tech/tech.component';
import {RouterModule, Routes} from '@angular/router';
import {StatutConnecteService} from './auth/statut-connecte.service';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AnaisComponent } from './anais/anais.component';
import { PierreBatignesBioComponent } from './pierre-batignes-bio/pierre-batignes-bio.component';
import { ROUTES } from '../../../groupe-2-front/src/app/app.routes';
import { VincentGComponent } from './vincent-g/vincent-g.component';
<<<<<<< HEAD
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
=======
import { JonathanBioComponent } from './jonathan-bio/jonathan-bio.component';
>>>>>>> e3f07dfda8639e47f454671e01f671f88375e207



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TechComponent,
    AnaisComponent,
    PierreBatignesBioComponent,
    VincentGComponent,
<<<<<<< HEAD
    PageAccueilComponent
=======
    JonathanBioComponent
>>>>>>> e3f07dfda8639e47f454671e01f671f88375e207
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
