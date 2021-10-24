import { Component, OnInit } from '@angular/core';
import {MessageService } from 'src/app/services/message.service';
import { Message} from 'src/app/models/message';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-message',
  templateUrl: './agregar-message.component.html',
  styleUrls: ['./agregar-message.component.css']
})

export class AgregarMessageComponent implements OnInit {

  //ATRIBUTOS
  messageText="";
  client=0;
  costume=0;

  //ARRAY FOR CLIENT
  listClient:any[]=[];
  //ARRAY FOR CLIENT
  listCostume:any[]=[];

 //COSNTRUCTOR
  constructor(
    private messageService:MessageService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listIdCostumesId();
    this.listIdClients();
  }

  public onCreate():void{

    const message:Message={
     "messageText":this.messageText,
     "client":{"idClient":this.listClient[this.client]},
     "costume":{"id":this.listCostume[this.costume]}
   }
   

    this.messageService.createElement(message).subscribe(
      res=>{
        this.toastr.success('Message Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/message']);


      },
      err=>{
        this.toastr.error('No se puedo crear','Fail',
          {
            timeOut:3000,positionClass:'toast-top-center'
          });
          this.router.navigate(['/message']);


      }
      )

    }

    public listIdClients():void{
      this.messageService.listClientForId().subscribe(
        res=>{
          let indice =0;
          for(let i in res){
            this.listClient[indice] = res[i].idClient;
            indice++;
          }
        },
        err=>{
          console.log(err);
        }
        );
      }  
    public listIdCostumesId():void{
      this.messageService.listCostumeForId().subscribe(
        res=>{
          let indice =0;
          for(let i in res){
            this.listCostume[indice] = res[i].id;
            indice++;
          }
        },
        err=>{
          console.log(err);
        }
        );
      }  






}
