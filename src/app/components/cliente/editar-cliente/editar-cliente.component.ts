import { Component, OnInit } from '@angular/core';
import{Client}from'src/app/models/client';
import{ClientService}from'src/app/services/client.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

   //ATRIBUTOS
   client:Client = {
    "name": "",
    "age": 0,
    "email":"",
    "password": ""



  }



  constructor(
    private clientService:ClientService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router

  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.getElementForId(id);
  }

  public getElementForId(id:any):void{
    
    this.clientService.getById(id).subscribe(
      res=>{
        
        this.client =res;
      },
      err=>{

        this.toastr.error('No se puede Editar','Fail',
        {
          timeOut:3000,positionClass:'toast-top-center'
        });
        this.router.navigate(['/client']);
      }
      );

    }

    public onUpdate():void{
      
      this.clientService.updateElement(this.client).subscribe(
        data=>{
         
           this.toastr.success('Cliente Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/client']);


        },
        err=>{

          this.toastr.error('No se puede editar','Fail',
        {
          timeOut:3000,positionClass:'toast-top-center'
        });
        this.router.navigate(['/client']);

        }

      );
    
        


    }

}
