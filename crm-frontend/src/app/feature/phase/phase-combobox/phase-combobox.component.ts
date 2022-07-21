import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Phase } from '../phase';
import { PhaseService } from '../phase.service';

@Component({
  selector: 'app-phase-combobox',
  templateUrl: './phase-combobox.component.html'
})
export class PhaseComboboxComponent implements OnInit {

  phases: Phase[] = [];

  constructor(
    private phaseService: PhaseService
  ) { }

  @Output() currentPhaseId = new EventEmitter<number>();
  @Input() idInput: number = 0;

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void{
    this.phaseService.findAll().subscribe(
      (response) => this.phases = response
    )
  }

  onChange(value: string): void{
    this.currentPhaseId.emit(parseInt(value));
  }

}
