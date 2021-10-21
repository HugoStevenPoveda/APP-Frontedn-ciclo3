import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import{Observable}from'rxjs';
import{Category}from'src/app/models/category';
import{ GlobalConstants } from 'src/app/shared/global-constants';




@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  

  //ATRIBUTOS
  CATEGORY_URL= GlobalConstants.apiURL+'/api/Category';
  
  //COSTRUCTOR
  constructor(private httpClient:HttpClient) { }

  //METODS
  public listCategorys():Observable<Category[]>{
     return this.httpClient.get<Category[]>(this.CATEGORY_URL+'/all');
     

  }


  public categoryId(id :number):Observable<Category>{
      return this.httpClient.get<Category>(this.CATEGORY_URL+`/${id}`);

  }
  
  public createCategory(category:Category):Observable<any>{
    return this.httpClient.post<any>(this.CATEGORY_URL+'/save',category);
  }
    
    

  public updateCategory(category:Category):Observable<any>{
    return this.httpClient.put<any>(this.CATEGORY_URL+'/update',category);
  }

  public deleteCategory(id :number):Observable<any>{
    return this.httpClient.delete<any>(this.CATEGORY_URL+`/${id}`);
 
  }
    
    

  
}