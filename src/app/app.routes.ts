import { Routes } from '@angular/router';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ContactComponent } from './contact/contact.component';
import { DesignersComponent } from './designers/designers.component';
import { PackagesComponent } from './packages/packages.component';
import { ServicesComponent } from './services/services.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {path:"", redirectTo:"/showcase",pathMatch:"full"},
  {path:"showcase",component:ShowcaseComponent},
  {path:"contact",component:ContactComponent},
  {path:"designers", component:DesignersComponent},
  {path:"packages",component:PackagesComponent},
  {path:"services",component:ServicesComponent},
  {path:"**",component:PageNotFoundComponent}
];
