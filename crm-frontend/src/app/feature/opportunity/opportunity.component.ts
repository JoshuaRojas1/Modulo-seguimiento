import { Component, OnInit } from '@angular/core';
import { Opportunity } from './opportunity';
import { OpportunityService } from './opportunity.service';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html'
})
export class OpportunityComponent implements OnInit {


  currentOpportunity: Opportunity = {
    opportunityId: 0,
    prospectoId: 0,
    monto: 0,
    etapaId: 0,
    vendedorId: 0,
    campaniaId: 0,
    created: new Date,
    updated: new Date,
    enable: false






  };

  constructor(
    private opportunityService: OpportunityService
  ) { }

  ngOnInit(): void {
  }

  save(): void{
    this.opportunityService.save(this.currentOpportunity)
    .subscribe(
      (response) => {
        console.log("registro Guardado :)");
      }
    )
  }
}
