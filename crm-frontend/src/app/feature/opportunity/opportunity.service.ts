import { Injectable } from '@angular/core';
import { Opportunity } from './opportunity';
import {  Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url:string = "http://localhost:8080/api/opportunity"



  constructor(
    private http: HttpClient
  ) { }

    // CREATE

    public save(opportunity: Opportunity): Observable<Opportunity>{
      return this.http.post<Opportunity>(this.url+"/save", opportunity, this.httpOptions)
    }

    // READ

    

}
