import { Component, OnInit } from '@angular/core';
import { Etapa } from './etapa';
import { EtapaService } from './etapa.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-etapa',
  templateUrl: './etapa.component.html'

})
export class EtapaComponent implements OnInit {

  currentEtapa: Etapa = {
    etapaId: 0,
    nombre: "",
    dni: "",
    created: new Date(),
    updated: new Date(),
    enable: new Boolean({})
  };

  constructor(
    private etapaService: EtapaService,
    private activedRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(
      (params) => {
        let id:string;
        if (params.get("id")){
          id = params.get("id")!;
          console.log("el id es:" + params.get("id"));
          console.log("el id convertido es:"+ id);
          this.findById(parseInt (id));
        }
    }
    )
  }

  save():void{
    this.etapaService.save(this.currentEtapa)
    .subscribe(
      (response) => {
        console.log("registro guardar");
        this.currentEtapa = {
        etapaId: 0,
        nombre: "",
        dni: "",
        created: new Date(),
        updated: new Date(),
        enable: new Boolean({})
        };
      }
    )
  }
  findById(id: number) : void {
    this.etapaService.findById(id)
    .subscribe(
      (reponse: Etapa) => {
        this.currentEtapa = reponse;
        console.log("lectura del id"+this.currentEtapa.etapaId);
      }
    )
  }

  delete():void{
    this.etapaService.deleteById(this.currentEtapa.etapaId)
    .subscribe(
      () => {
        console.log("Registro Eliminado");

        this.currentEtapa = {
        etapaId: 0,
        nombre: "",
        dni: "",
        created: new Date(),
        updated: new Date(),
        enable: new Boolean({})
        };
      }
    )
  }

}
