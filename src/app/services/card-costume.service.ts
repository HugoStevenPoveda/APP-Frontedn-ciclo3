import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import{Observable}from'rxjs';
import{Costume}from'src/app/models/costume';
import{ GlobalConstants } from 'src/app/shared/global-constants';

@Injectable({
  providedIn: 'root'
})
export class CardCostumeService {

    //ATRIBUTOS
    COSTUME_URL= GlobalConstants.apiURL+'/api/Costume';

  constructor(private httpClient:HttpClient) { 
    


  }
  public listAll():Observable<Costume[]>{
    return this.httpClient.get<Costume[]>(this.COSTUME_URL+'/all');
  }
  public getById(id :number):Observable<Costume>{
    return this.httpClient.get<Costume>(this.COSTUME_URL+`/${id}`);
  }
}
