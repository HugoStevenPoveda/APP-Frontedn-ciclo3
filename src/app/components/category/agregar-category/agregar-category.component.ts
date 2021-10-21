import { Component, OnInit } from '@angular/core';
import {CategoryService } from 'src/app/services/category.service';
import { Category} from 'src/app/models/category';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-agregar-category',
  templateUrl: './agregar-category.component.html',
  styleUrls: ['./agregar-category.component.css']
})
export class AgregarCategoryComponent implements OnInit {

  //ATRIBUTOS
  name='';
  description='';

  constructor(
    private categoryService:CategoryService,
    private toastr: ToastrService,
    private router: Router
 ) { }

  ngOnInit(): void {
  }
   
  public onCreate():void{

    const category = new Category(this.name,this.description);
    this.categoryService.createCategory(category).subscribe(
      res=>{
        this.toastr.success('Category Creada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/category']);


      },
      err=>{
        this.toastr.error('No se pudo crear','Fail',
          {
            timeOut:3000,positionClass:'toast-top-center'
          });
          this.router.navigate(['/category']);


      }
      )

    }

  }







