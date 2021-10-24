import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import{Observable}from'rxjs';
import{Costume}from'src/app/models/costume';
import{Category}from'src/app/models/category';
import{ GlobalConstants } from 'src/app/shared/global-constants';

@Injectable({
  providedIn: 'root'
})
export class CostumeService {

  //ATRIBUTOS
  COSTUME_URL= GlobalConstants.apiURL+'/api/Costume';
  CATEGORY_URL= GlobalConstants.apiURL+'/api/Category';

  //COSNTRUCTOR
  constructor(private httpClient:HttpClient) { }

  //METODS

  public listAll():Observable<Costume[]>{
      return this.httpClient.get<Costume[]>(this.COSTUME_URL+'/all');
    }

    public getById(id :number):Observable<Costume>{
      return this.httpClient.get<Costume>(this.COSTUME_URL+`/${id}`);
    }  

    public createElement(costume:Costume):Observable<any>{
      return this.httpClient.post<any>(this.COSTUME_URL+'/save',costume);
    }

    public updateElement(costume:Costume):Observable<any>{
      return this.httpClient.put<any>(this.COSTUME_URL+'/update',costume);
    }

    public deleteElement(id :number):Observable<any>{
      return this.httpClient.delete<any>(this.COSTUME_URL+`/${id}`);
   
    }

    //SERVICIOS EN PARA LLAMAR CATEGORi
    public listCategoryForId():Observable<Category[]>{
      return this.httpClient.get<Category[]>(this.CATEGORY_URL+'/all');

    }





}
