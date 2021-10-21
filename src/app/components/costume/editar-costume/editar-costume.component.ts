import { Component, OnInit } from '@angular/core';
import {CostumeService } from 'src/app/services/costume.service';
import { Costume} from 'src/app/models/costume';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-costume',
  templateUrl: './editar-costume.component.html',
  styleUrls: ['./editar-costume.component.css']
})
export class EditarCostumeComponent implements OnInit {

   //ATRIBUTOS
   costume:Costume={
    "name": " ",
    "brand":"",
    "year": 0,
    "description":"",
    "category":{"id":0}


  };

  constructor(
    private costumeService:CostumeService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.getElementForId(id);
  }

  
  public getElementForId(id:any):void{
    this.costumeService.getById(id).subscribe(
      res=>{
        
        this.costume =res;
      },
      err=>{

        this.toastr.error('No se puede Editar','Fail',
        {
          timeOut:3000,positionClass:'toast-top-center'
        });
        this.router.navigate(['/costume']);
      }
      );

    }

    public onUpdate():void{
     
      this.costumeService.updateElement(this.costume).subscribe(
        data=>{
         
           this.toastr.success('Costume Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/costume']);


        },
        err=>{

          this.toastr.error('No se puede editar','Fail',
        {
          timeOut:3000,positionClass:'toast-top-center'
        });
        this.router.navigate(['/costume']);

        }

      );
    
        


    }




}