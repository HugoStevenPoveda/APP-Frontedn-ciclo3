import { Component, OnInit } from '@angular/core';
import {MessageService } from 'src/app/services/message.service';
import {Message} from 'src/app/models/message';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-editar-message',
  templateUrl: './editar-message.component.html',
  styleUrls: ['./editar-message.component.css']
})
export class EditarMessageComponent implements OnInit {

   //ATRIBUTOS
   message:Message={
    "messageText":" ",
    "costume":{"id":1},
    "client":{"idClient":1}

  }

   //ARRAY FOR CLIENT
   listClient:any[]=[];
   //ARRAY FOR CLIENT
   listCostume:any[]=[];
 

  //CONSTRUCTOR
  constructor(
    private messageService:MessageService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router


  ) { }
 

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.getElementForId(id);
    this.listIdCostumesId();
    this.listIdClients();

    
  }
   
  public getElementForId(id:any):void{
    this.messageService.getById(id).subscribe(
      res=>{
        
        this.message =res;
      },
      err=>{

        this.toastr.error('No se puede Editar','Fail',
        {
          timeOut:3000,positionClass:'toast-top-center'
        });
        this.router.navigate(['/message']);
      }
      );

    }

    public onUpdate():void{

      this.messageService.updateElement(this.message).subscribe(
        data=>{
         
           this.toastr.success('Message Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/message']);


        },
        err=>{

          this.toastr.error('No se puede editar','Fail',
        {
          timeOut:3000,positionClass:'toast-top-center'
        });
        this.router.navigate(['/message']);

        }

      );
    
        


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
