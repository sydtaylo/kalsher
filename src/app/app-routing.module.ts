import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }      from './home/home.component';
import { ClassesComponent }      from './classes/classes.component';
import { ResearchComponent }      from './research/research.component';
import { ConsultingComponent }      from './consulting/consulting.component';
import { ContactComponent }      from './contact/contact.component';
import { SurveyComponent }      from './research/survey/survey.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'classes', component: ClassesComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'consulting', component: ConsultingComponent},
  { path: 'survey', component: SurveyComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
