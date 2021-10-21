import { Component, OnInit } from '@angular/core';
import{Category}from'src/app/models/category';
import{CategoryService}from'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-category',
  templateUrl: './editar-category.component.html',
  styleUrls: ['./editar-category.component.css']
})
export class EditarCategoryComponent implements OnInit {

  //ATRIBUTO
  category:Category={
   "name":"",
   "description":""

  };

  constructor(
    private categoryService:CategoryService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
    
      ) { }



  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.categoryForId(id);

  }

  public categoryForId(id:any):void{
    this.categoryService.categoryId(id).subscribe(
      res=>{
        
        this.category =res;
      },
      err=>{

        this.toastr.error('No se puede editar','Fail',
        {
          timeOut:3000,positionClass:'toast-top-center'
        });
        this.router.navigate(['/category']);
      }
      );

    }

    public onUpdate():void{
      const id = this.activatedRoute.snapshot.params.id;
      this.categoryService.updateCategory(this.category).subscribe(
        data=>{
         
           this.toastr.success('Producto Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/category']);


        },
        err=>{

          this.toastr.error('No se puede editar','Fail',
        {
          timeOut:3000,positionClass:'toast-top-center'
        });
        this.router.navigate(['/category']);

        }

      );
    
        


    }







}
