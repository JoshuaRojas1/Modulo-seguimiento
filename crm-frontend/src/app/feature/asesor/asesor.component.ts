import { Component, OnInit } from '@angular/core';
import { timestamp } from 'rxjs';
import { Asesor } from './asesor';
import { AsesorService } from './asesor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asesor',
  templateUrl: './asesor.component.html'
})
export class AsesorComponent implements OnInit {


  currentAsesor: Asesor = {
    id:0,
    nombre:"",
    correo:"",
    telefono:"",
    created: new Date(),
    update: new Date(),
    activo: false

  };

  constructor(
    private asesorService: AsesorService,
    private activeRoute : ActivatedRoute


  ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      (params) => {
        let id: string;
        if (params.get("id")){
          id = params.get("id")!;
          this.findById(parseInt(id));
        }
      }
    )
  }

  save():void{
    this.asesorService.save(this.currentAsesor).subscribe(
      (response) => {
        console.log("Registro Guardado");
        this.currentAsesor = {
          id:0,
          nombre:"",
          correo:"",
          telefono:"",
          created: new Date(),
          update: new Date(),
          activo: false
      
        };
      }
    )
  }

  findById(id:number):void{
    this.asesorService.findById(id)
    .subscribe(
      (response : Asesor) => {
        this.currentAsesor = response;
      }
    )
  }
  delete():void{
    this.asesorService.deleteById(this.currentAsesor.id).subscribe(
      (response) =>{
        console.log("Registro Eliminado")
        this.currentAsesor = {
          id:0,
          nombre:"",
          correo:"",
          telefono:"",
          created: new Date(),
          update: new Date(),
          activo: false
      
        };
      }
      )
  }

}
