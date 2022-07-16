import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';
import { Person } from './person';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit {

  currentPerson: Person = {
    id: 0,
    name: "",
    dni:"",
    create: new Date(),
    update: new Date(),
    enable: new Boolean({})

  };

  constructor(
    private personService: PersonService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe(
  (params) => {
    let id:string ="";
    if(params.get("id")){
      id = params.get("id")!;
      this.findById(parseInt(id));
    }
  }
  )
  }

  save(): void{
    this.personService.save(this.currentPerson)
    .subscribe(
      (response) => {
        console.log("registro guardado");
        this.currentPerson ={
              id: 0,
              name: "",
              dni:"",
              create: new Date(),
              update: new Date(),
              enable: new Boolean({})
         };
      }
    )
  }

  findById(id: number): void{
    this.personService.findById(id)
    .subscribe(
      (response: Person) => {
        this.currentPerson = response;
      }
    )
  }

    delete():void {
    this.personService.deleteById(this.currentPerson.id)
    .subscribe(
      () => {
        console.log("registro eliminado con exito!");
        this.currentPerson ={
                      id: 0,
                      name: "",
                      dni:"",
                      create: new Date(),
                      update: new Date(),
                      enable: new Boolean({})
                 };
        }
      )
    }

  }
