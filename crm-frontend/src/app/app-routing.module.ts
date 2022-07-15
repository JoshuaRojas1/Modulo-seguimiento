import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsesorComponent } from './feature/asesor/asesor.component';
import { OpportunityComponent } from './feature/opportunity/opportunity.component';

const routes: Routes = [

  {path: 'opportunity', component: OpportunityComponent},
  {path: 'opportunity/:id', component: OpportunityComponent},
  {path: 'asesor', component: AsesorComponent },
  {path: 'asesor/:id', component: AsesorComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
