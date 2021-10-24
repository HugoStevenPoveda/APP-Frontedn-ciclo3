import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Costume } from 'src/app/models/costume';
import { CostumeService } from 'src/app/services/costume.service';

@Component({
  selector: 'app-agregar-costume',
  templateUrl: './agregar-costume.component.html',
  styleUrls: ['./agregar-costume.component.css']
})

export class AgregarCostumeComponent implements OnInit {

//ATRIBUTOS
 name= " ";
 brand="";
 year= 0;
 description="";
 category=0;

 //ARRAY PARA ID CATEGORY
 listCategory:any[]=[];

  

  constructor(
     private costumeService:CostumeService,
     private toastr: ToastrService,
     private router: Router

  ) { }

  ngOnInit(): void {
    this.listCategorys();
  }

  public onCreate():void{

    const costume:Costume={
     "name":this.name,
     "brand":this.brand,
     "year": this.year,
     "description":this.description,
     "category":{"id":this.listCategory[this.category]}
   }  
    this.costumeService.createElement(costume).subscribe(
      res=>{
        this.toastr.success('Costume Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/costume']);


      },
      err=>{
        this.toastr.error('No se pudo crear','Fail',
          {
            timeOut:3000,positionClass:'toast-top-center'
          });
          this.router.navigate(['/costume']);


      }
      )

    }

    public listCategorys():void{
      this.costumeService.listCategoryForId().subscribe(
        res=>{
          let indice =0;
          for(let i in res){
            this.listCategory[indice] = res[i].id;
            indice++;
          }
        },
        err=>{
          console.log(err);
        }
        );
      }  








}
