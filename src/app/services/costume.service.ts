import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import{Observable}from'rxjs';
import{Costume}from'src/app/models/costume';
import{ GlobalConstants } from 'src/app/shared/global-constants';

@Injectable({
  providedIn: 'root'
})
export class CostumeService {

  //ATRIBUTOS
  CATEGORY_URL= GlobalConstants.apiURL+'/api/Costume';

  //COSNTRUCTOR
  constructor(private httpClient:HttpClient) { }

  //METODS

  public listAll():Observable<Costume[]>{
      return this.httpClient.get<Costume[]>(this.CATEGORY_URL+'/all');
    }

    public getById(id :number):Observable<Costume>{
      return this.httpClient.get<Costume>(this.CATEGORY_URL+`/${id}`);
    }  

    public createElement(costume:Costume):Observable<any>{
      return this.httpClient.post<any>(this.CATEGORY_URL+'/save',costume);
    }

    public updateElement(costume:Costume):Observable<any>{
      return this.httpClient.put<any>(this.CATEGORY_URL+'/update',costume);
    }

    public deleteElement(id :number):Observable<any>{
      return this.httpClient.delete<any>(this.CATEGORY_URL+`/${id}`);
   
    }





}
