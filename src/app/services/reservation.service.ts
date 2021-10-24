import { Injectable } from '@angular/core';
import{Reservation}from'src/app/models/reservation';
import{Client}from'src/app/models/client';
import{Costume}from'src/app/models/costume';
import{HttpClient}from'@angular/common/http';
import{Observable}from'rxjs';
import{ GlobalConstants } from 'src/app/shared/global-constants';


@Injectable({
  providedIn: 'root'
})

export class ReservationService {

   //ATRIBUTOS
   RESERVA_URL= GlobalConstants.apiURL+'/api/Reservation';
   ClIENT_URL= GlobalConstants.apiURL+'/api/Client';
   COSTUME_URL= GlobalConstants.apiURL+'/api/Costume';

  constructor(private httpClient:HttpClient) { }

 //METODS

 public listAll():Observable<Reservation[]>{
  return this.httpClient.get<Reservation[]>(this.RESERVA_URL+'/all');
}

public getById(id :number):Observable<Reservation>{
  return this.httpClient.get<Reservation>(this.RESERVA_URL+`/${id}`);
}  

public createElement(reservation:Reservation):Observable<any>{
  return this.httpClient.post<any>(this.RESERVA_URL+'/save',reservation);
}

public updateElement(reservation:Reservation):Observable<any>{
  return this.httpClient.put<any>(this.RESERVA_URL+'/update',reservation);
}

public deleteElement(id :number):Observable<any>{
  return this.httpClient.delete<any>(this.RESERVA_URL+`/${id}`);

}

 //SERVICIO PARA LLAMAR CLIENT
 public listClientForId():Observable<Client[]>{
  return this.httpClient.get<Client[]>(this.ClIENT_URL+'/all');
 }
//SERVICIO PARA LLAMAR Costume
public listCostumeForId():Observable<Costume[]>{
  return this.httpClient.get<Costume[]>(this.COSTUME_URL+'/all');
 }



}
