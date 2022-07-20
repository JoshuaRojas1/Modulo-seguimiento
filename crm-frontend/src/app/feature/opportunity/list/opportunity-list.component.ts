import { Component, OnInit } from '@angular/core';
import { Opportunity } from '../opportunity';
import { OpportunityService } from '../opportunity.service';

@Component({
  selector: 'app-opportunity-list',
  templateUrl: './opportunity-list.component.html'
})
export class OpportunityListComponent implements OnInit {

  constructor(
    private opportunityService: OpportunityService
  ) { }

  opportunities: Opportunity[] = [];

  ngOnInit(): void {
    this.findAll();
  }
  findAll():void{
    this.opportunityService.findAll().subscribe(
      (response) => {
        this.opportunities = response;
      }
    )
  }

  findByDescripcion(term:string){
    if(term.length===0){
      this.findAll();
    }
    if(term.length>=2){
      this.opportunityService.findByDescripcion(term).subscribe(
        (response) => this.opportunities = response
      )
    }



  }

}
