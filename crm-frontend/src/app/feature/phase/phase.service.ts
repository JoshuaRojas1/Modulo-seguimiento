import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Phase } from './phase';

@Injectable({
  providedIn: 'root'
})
export class PhaseService {

  constructor(
    private http: HttpClient
  ) { }
  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url:string = "http://localhost:8080/api/phase"

  public findAll(): Observable<Phase[]>{
    return this.http.get<Phase[]>(this.url+"/findAll", this.httpOptions);
  }

}
