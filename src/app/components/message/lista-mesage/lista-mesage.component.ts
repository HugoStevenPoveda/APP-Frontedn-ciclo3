import { Component, OnInit } from '@angular/core';
import{Message}from'src/app/models/message';
import{MessageService}from'src/app/services/message.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-mesage',
  templateUrl: './lista-mesage.component.html',
  styleUrls: ['./lista-mesage.component.css']
})
export class ListaMesageComponent implements OnInit {

  //ATRIBUTOS
  messages:Message[]=[];

  //CONSTRUCTOR
  constructor(
    private messageService:MessageService,
    private toastr:ToastrService
    ) { }



  ngOnInit(): void {
    this.listAll();
  }

  public listAll():void{
    this.messageService.listAll().subscribe(
      res=>{ 
        console.log(res);
        this.messages = res;
      },
      err=>{
        console.error(err);
      }
      );
    }

    
public delete(id:any){

  this.messageService.deleteElement(id).subscribe(
     res=>{
      this.toastr.success('Message eliminada','OK',
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
