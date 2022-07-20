import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FormsModule } from '@angular/forms';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { OpportunityToolbarComponent } from './opportunity/toolbar/opportunity-toolbar.component';
import { OpportunityListComponent } from './opportunity/list/opportunity-list.component';
import { CityComboboxComponent } from './city/city-combobox/city-combobox.component';



@NgModule({
  declarations: [

    OpportunityComponent,
    OpportunityToolbarComponent,
    OpportunityListComponent,
    CityComboboxComponent



  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
