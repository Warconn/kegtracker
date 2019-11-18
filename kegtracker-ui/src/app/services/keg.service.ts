import Keg from '../models/keg.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class KegService {

  api_url = 'http://localhost:3000';
  kegUrl = `${this.api_url}/api/kegs`;

  constructor(
    private http: HttpClient
  ) { }


  //Create todo, takes a ToDo Object
  createKeg(keg: Keg): Observable<any>{
    //returns the observable of http post request 
    return this.http.post(`${this.kegUrl}`, keg);
  }

  getKegs(): Observable<Keg[]>{
    return this.http.get(this.kegUrl)
    .map(res  => {       
      return res["data"].docs as Keg[];
    })
  }
  //Update todo, takes a ToDo Object as parameter
  editKeg(keg:Keg){
    let editUrl = `${this.kegUrl}`
    //returns the observable of http put request 
    return this.http.put(editUrl, keg);
  }

  deleteKeg(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.kegUrl}/${id}`
    return this.http.delete(deleteUrl)
    .map(res  => {
      return res;
    })
  }

  //Default Error handling method.
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}