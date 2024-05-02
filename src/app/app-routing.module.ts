import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalougeComponent } from './catalouge/catalouge.component';
import { HomeComponent } from './home/home.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SupportComponent } from './support/support.component';
import { InformationComponent } from './information/information.component';
import { DesignersComponent } from './designers/designers.component';
import { DevelopersComponent } from './developers/developers.component';
import { PrerequisiteComponent } from './prerequisite/prerequisite.component';
import { ArtifactoryComponent } from './artifactory/artifactory.component';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalouge', component: CatalougeComponent },
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'designers', component: DesignersComponent },
  { path: 'developers', component: DevelopersComponent },
  { path: 'catalouge/prerequisite', component: PrerequisiteComponent },
  { path: 'catalouge/artifactory', component: ArtifactoryComponent },
  { path: 'subscription/angular', component: AngularComponent },
  { path: 'subscription/react', component: ReactComponent },
  { path: 'information', component: InformationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
