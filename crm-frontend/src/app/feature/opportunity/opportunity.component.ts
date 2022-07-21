import { Component, OnInit } from '@angular/core';
import { Opportunity } from './opportunity';
import { OpportunityService } from './opportunity.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html'
})
export class OpportunityComponent implements OnInit {


  currentOpportunity: Opportunity = this.resetOpportunity();

  constructor(
    private opportunityService: OpportunityService,
    private activateRouter: ActivatedRoute,
    private route: Router
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
        this.currentOpportunity = this.resetOpportunity();
        this.route.navigate(['/layout/opportunity-list'])
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

  resetOpportunity(){
    return this.currentOpportunity = {
      opportunityId: 0,
      prospectoId: 0,
      monto: 0,
      etapaId: 0,
      vendedorId: 0,
      campaniaId: 0,
      created: new Date,
      updated: new Date,
      enable: false,
      descripcion: "",
      phaseId: 0
    };

  }


}
