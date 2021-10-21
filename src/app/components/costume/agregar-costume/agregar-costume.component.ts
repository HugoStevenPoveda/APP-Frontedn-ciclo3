import { Component, OnInit } from '@angular/core';
import {CostumeService } from 'src/app/services/costume.service';
import { Costume} from 'src/app/models/costume';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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
  

  constructor(
     private costumeService:CostumeService,
     private toastr: ToastrService,
     private router: Router

  ) { }

  ngOnInit(): void {
  }

  public onCreate():void{

    const costume:Costume={
     "name":this.name,
     "brand":this.brand,
     "year": this.year,
     "description":this.description,
     "category":{"id":this.category}
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

}
