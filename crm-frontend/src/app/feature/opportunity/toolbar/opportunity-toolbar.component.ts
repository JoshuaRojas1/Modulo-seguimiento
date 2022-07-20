import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-opportunity-toolbar',
  templateUrl: './opportunity-toolbar.component.html'
})
export class OpportunityToolbarComponent implements OnInit {

  constructor() { }

  @Output() term = new EventEmitter<string>();

  @Input() item: string= "";

  ngOnInit(): void {
  }

  onInput(inputTerm: string):void{
    this.term.emit(inputTerm);
  }

}
