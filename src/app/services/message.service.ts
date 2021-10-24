import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import{Observable}from'rxjs';
import{Message}from'src/app/models/message';
import{Client}from'src/app/models/client';
import{Costume}from'src/app/models/costume';
import{ GlobalConstants } from 'src/app/shared/global-constants';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

   //ATRIBUTOS
   MESSAGE_URL= GlobalConstants.apiURL+'/api/Message';
   ClIENT_URL= GlobalConstants.apiURL+'/api/Client';
   COSTUME_URL= GlobalConstants.apiURL+'/api/Costume';

  constructor(private httpClient:HttpClient) { }

   //METODS

   public listAll():Observable<Message[]>{
    return this.httpClient.get<Message[]>(this.MESSAGE_URL+'/all');
  }

  public getById(id :number):Observable<Message>{
    return this.httpClient.get<Message>(this.MESSAGE_URL+`/${id}`);
  }  

  public createElement(message:Message):Observable<any>{
    return this.httpClient.post<any>(this.MESSAGE_URL+'/save',message);
  }

  public updateElement(message:Message):Observable<any>{
    return this.httpClient.put<any>(this.MESSAGE_URL+'/update',message);
  }

  public deleteElement(id :number):Observable<any>{
    return this.httpClient.delete<any>(this.MESSAGE_URL+`/${id}`);
 
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
