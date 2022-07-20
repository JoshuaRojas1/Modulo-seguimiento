import { Injectable } from '@angular/core';
import { Etapa } from './etapa';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtapaService {

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url:string = "http://localhost:8090/api/etapa"

  constructor(
    private http: HttpClient
  ) { }

  //CREATE
  public save(etapa: Etapa): Observable<Etapa>{
    return this.http.post<Etapa>(this.url+"/save", etapa , this.httpOptions);
  }

  //Read
  public findById(id: number): Observable<Etapa>{
    return this.http.get<Etapa>(this.url+"/"+id, this.httpOptions);
  }

  public deleteById(id:number): Observable<void>{
   return this.http.delete<void>(this.url+"/delete/"+id, this.httpOptions);
  }
}
