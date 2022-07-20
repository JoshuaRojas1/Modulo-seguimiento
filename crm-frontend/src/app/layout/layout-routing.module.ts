import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpportunityListComponent } from '../feature/opportunity/list/opportunity-list.component';
import { OpportunityComponent } from '../feature/opportunity/opportunity.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent,
    children:[
      {path: '', component:DashboardComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'opportunity-list', component: OpportunityListComponent},
      {path: 'opportunity-form', component: OpportunityComponent},
      {path: 'opportunity-form/:id', component: OpportunityComponent}
    ]


  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
