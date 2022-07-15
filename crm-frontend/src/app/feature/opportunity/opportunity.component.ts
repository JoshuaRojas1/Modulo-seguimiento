import { Component, OnInit } from '@angular/core';
import { Opportunity } from './opportunity';
import { OpportunityService } from './opportunity.service';
import { ActivatedRoute } from '@angular/router';

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
    private opportunityService: OpportunityService,
    private activateRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activateRouter.paramMap
    .subscribe(
      (params) => {
        let id: string = "";
        if(params.get("id")){
          id = params.get("id")!;
          this.findById(parseInt(id));
        }
      }
    )
  }

  save(): void{
    this.opportunityService.save(this.currentOpportunity)
    .subscribe(
      (response) => {
        console.log("registro Guardado :)");
        this.currentOpportunity = {
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
      }
    )
  }

  findById(id: number): void {
    this.opportunityService.findById(id)
    .subscribe(
      (response: Opportunity) => {
        this.currentOpportunity = response;
      }
    )
  }
}
