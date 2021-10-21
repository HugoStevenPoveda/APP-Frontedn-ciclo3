import { Component, OnInit } from '@angular/core';
import {MessageService } from 'src/app/services/message.service';
import { Message} from 'src/app/models/message';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Costume } from 'src/app/models/costume';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

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
  }

  public getElementForId(id:any):void{
    this.messageService.getById(id).subscribe(
      res=>{
        
        this.message =res;
      },
      err=>{

        this.toastr.error('No se puede Ver','Fail',
        {
          timeOut:3000,positionClass:'toast-top-center'
        });
        this.volver();
      }
      );

    }

    public volver(): void {
      this.router.navigate(['/message']);
    }






}
