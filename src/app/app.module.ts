import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CatalougeComponent } from './catalouge/catalouge.component';
import { InformationComponent } from './information/information.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SupportComponent } from './support/support.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MinisidebarComponent } from './minisidebar/minisidebar.component';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';
import { DevelopersComponent } from './developers/developers.component';
import { DesignersComponent } from './designers/designers.component';
import { PrerequisiteComponent } from './prerequisite/prerequisite.component';
import { ArtifactoryComponent } from './artifactory/artifactory.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    CatalougeComponent,
    InformationComponent,
    SubscriptionComponent,
    SupportComponent,
    HomeComponent,
    FooterComponent,
    MinisidebarComponent,
    AngularComponent,
    ReactComponent,
    DevelopersComponent,
    DesignersComponent,
    PrerequisiteComponent,
    ArtifactoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
