import { Injectable } from '@angular/core';
import{Reservation}from'src/app/models/reservation';
import{HttpClient}from'@angular/common/http';
import{Observable}from'rxjs';
import{ GlobalConstants } from 'src/app/shared/global-constants';


@Injectable({
  providedIn: 'root'
})

export class ReservationService {

   //ATRIBUTOS
   CATEGORY_URL= GlobalConstants.apiURL+'/api/Reservation';

  constructor(private httpClient:HttpClient) { }

 //METODS

 public listAll():Observable<Reservation[]>{
  return this.httpClient.get<Reservation[]>(this.CATEGORY_URL+'/all');
}

public getById(id :number):Observable<Reservation>{
  return this.httpClient.get<Reservation>(this.CATEGORY_URL+`/${id}`);
}  

public createElement(reservation:Reservation):Observable<any>{
  return this.httpClient.post<any>(this.CATEGORY_URL+'/save',reservation);
}

public updateElement(reservation:Reservation):Observable<any>{
  return this.httpClient.put<any>(this.CATEGORY_URL+'/update',reservation);
}

public deleteElement(id :number):Observable<any>{
  return this.httpClient.delete<any>(this.CATEGORY_URL+`/${id}`);

}



}
