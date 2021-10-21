import { Component, OnInit } from '@angular/core';
import{Client}from'src/app/models/client';
import{ClientService}from'src/app/services/client.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  //ATRIBUTOS
  clients:Client[]=[];

  constructor(
     private clientService:ClientService,
     private toastr:ToastrService

  ) { }

  ngOnInit(): void {
    this.listAll();
  }

  public listAll():void{
    this.clientService.listAll().subscribe(
      res=>{ 
        console.log(res);
        this.clients = res;
      },
      err=>{
        console.error(err);
      }
      );
    }
      



public delete(id:any){

    this.clientService.deleteElement(id).subscribe(
       res=>{
        this.toastr.success('Client eliminada','OK',
        {
          timeOut:3000,positionClass:'toast-top-center'
        });
        this.listAll();

       },
       err=>{
        this.toastr.error('No se puede eliminar','Fail',
        {
          timeOut:3000,positionClass:'toast-top-center'
        })})





}

}
