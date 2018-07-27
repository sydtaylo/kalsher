import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ResearchComponent } from './research/research.component';
import { SurveyComponent } from './research/survey/survey.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { ClassesComponent } from './classes/classes.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ResearchComponent,
    SurveyComponent,
    HomeComponent,
    HeaderComponent,
    ConsultingComponent,
    ClassesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
