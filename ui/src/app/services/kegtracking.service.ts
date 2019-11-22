import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import Keg from '../models/keg.model';
import { Observable, of } from 'rxjs'
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KegtrackingService {
  api_url = 'http://localhost:3000';
  kegUrl = `${this.api_url}/api/kegs`;

  constructor(    private http: HttpClient
    ) { }

  createKeg(keg: Keg): Observable<any>{
    return this.http.post(`${this.kegUrl}`, keg);
  }

  getKegs(): Observable<Keg[]>{
    return this.http.get(this.kegUrl)
    .pipe(map(res  => {       
      return res["data"].docs as Keg[];
    }))
  }

  editKeg(keg:Keg){
    let editUrl = `${this.kegUrl}`
    console.log(keg);
    
    //cleanse the id out of the beer body
    delete keg.beer[0]['_id'];

    return this.http.put(editUrl, keg);
  }

  deleteKeg(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.kegUrl}/${id}`
    return this.http.delete(deleteUrl)
    .pipe(map(res  => {
      return res;
    }))
  }

  //Default Error handling method.
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
