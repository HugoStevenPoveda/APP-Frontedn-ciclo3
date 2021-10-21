import { Component, OnInit } from '@angular/core';
import{Category}from'src/app/models/category';
import{CategoryService}from'src/app/services/category.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-lista-category',
  templateUrl: './lista-category.component.html',
  styleUrls: ['./lista-category.component.css']
})
export class ListaCategoryComponent implements OnInit {

  categories:Category[]=[];

  constructor(
     private categoryService:CategoryService,
     private toastr:ToastrService


  ) { }

  ngOnInit(): void {
    this.listarCategories();
  }
   
   public listarCategories():void{
      this.categoryService.listCategorys().subscribe(
        res=>{ 
          console.log(res);
          this.categories = res;
        },
        err=>{
          console.error(err);
        }
        

      );

   }

  public eliminar(id:any){

      this.categoryService.deleteCategory(id).subscribe(
         res=>{
          this.toastr.success('Category eliminada','OK',
          {
            timeOut:3000,positionClass:'toast-top-center'
          });
          this.listarCategories();

         },
         err=>{
          this.toastr.error('No se puede eliminar','Fail',
          {
            timeOut:3000,positionClass:'toast-top-center'
          })})





}}
