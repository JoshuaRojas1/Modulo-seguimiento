import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {Asesor} from './asesor';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AsesorService {

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"aplication/json"})
  }
  private url ="http://localhost:8080/api/asesor";


  constructor(
    private http: HttpClient
  ) { }

  // CREATE
  public save(asesor:Asesor): Observable<Asesor>{
    return this.http.post<Asesor>(this.url+"/save",asesor,this.httpOptions);
  }

  // Read
  public findById(id: number): Observable<Asesor>{
    return this.http.get<Asesor>(this.url+"/"+id, this.httpOptions);
  }

  //Delete
  public deleteById(id:number): Observable<void>{
    return this.http.delete<void>(this.url+"/delete/"+id, this.httpOptions);
  }
}
