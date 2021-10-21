import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import{Observable}from'rxjs';
import{Message}from'src/app/models/message';
import{ GlobalConstants } from 'src/app/shared/global-constants';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

   //ATRIBUTOS
   CATEGORY_URL= GlobalConstants.apiURL+'/api/Message';

  constructor(private httpClient:HttpClient) { }

   //METODS

   public listAll():Observable<Message[]>{
    return this.httpClient.get<Message[]>(this.CATEGORY_URL+'/all');
  }

  public getById(id :number):Observable<Message>{
    return this.httpClient.get<Message>(this.CATEGORY_URL+`/${id}`);
  }  

  public createElement(message:Message):Observable<any>{
    return this.httpClient.post<any>(this.CATEGORY_URL+'/save',message);
  }

  public updateElement(message:Message):Observable<any>{
    return this.httpClient.put<any>(this.CATEGORY_URL+'/update',message);
  }

  public deleteElement(id :number):Observable<any>{
    return this.httpClient.delete<any>(this.CATEGORY_URL+`/${id}`);
 
  }




}
