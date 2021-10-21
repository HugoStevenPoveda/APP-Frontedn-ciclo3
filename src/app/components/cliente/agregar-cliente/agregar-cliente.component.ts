import { Component, OnInit } from '@angular/core';
import{Client}from'src/app/models/client';
import{ClientService}from'src/app/services/client.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  //ATRIBUTOS
    name="";
    age=0;
    email="";
    password="";

  constructor(
    private clientService:ClientService,
    private toastr: ToastrService,
     private router: Router
  ) { }

  ngOnInit(): void {
  }


  public onCreate():void{

    const client = new Client(this.name,this.age ,this.email,this.password);
      this.clientService.createElement(client).subscribe(
      res=>{
        this.toastr.success('Cliente Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/client']);


      },
      err=>{
        this.toastr.error('No se pudo crear','Fail',
          {
            timeOut:3000,positionClass:'toast-top-center'
          });
          this.router.navigate(['/client']);


      }
      )

    }

}
