import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalougeComponent } from './catalouge/catalouge.component';
import { HomeComponent } from './home/home.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SupportComponent } from './support/support.component';
import { InformationComponent } from './information/information.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalouge', component: CatalougeComponent },
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'support', component: SupportComponent },
  { path: 'information', component: InformationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
