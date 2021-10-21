import { Component, OnInit } from '@angular/core';
import {MessageService } from 'src/app/services/message.service';
import {Message} from 'src/app/models/message';
import { Costume } from 'src/app/models/costume';
import { Client } from 'src/app/models/client';
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
    "costume":new Costume(" "," ",0," ",0),
    "client":new Client(" ",0," ","")

  }

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

    console.log(this.message);
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
      console.log(this.message);

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

  
  


}
