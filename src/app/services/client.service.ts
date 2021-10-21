import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import{Observable}from'rxjs';
import{Client}from'src/app/models/client';
import{ GlobalConstants } from 'src/app/shared/global-constants';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  //ATRIBUTOS
  CATEGORY_URL= GlobalConstants.apiURL+'/api/Client';
 //CONSTRUCTOR
  constructor(private httpClient:HttpClient) { }
 //METODOS

 public listAll():Observable<Client[]>{
  return this.httpClient.get<Client[]>(this.CATEGORY_URL+'/all');
}

public getById(id :number):Observable<Client>{
  return this.httpClient.get<Client>(this.CATEGORY_URL+`/${id}`);
}  

public createElement(Client:Client):Observable<any>{
  return this.httpClient.post<any>(this.CATEGORY_URL+'/save',Client);
}

public updateElement(Client:Client):Observable<any>{
  return this.httpClient.put<any>(this.CATEGORY_URL+'/update',Client);
}

public deleteElement(id :number):Observable<any>{
  return this.httpClient.delete<any>(this.CATEGORY_URL+`/${id}`);

}

 
 







}
