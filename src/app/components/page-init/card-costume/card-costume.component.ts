import { Component, OnInit } from '@angular/core';
import{Costume}from'src/app/models/costume';
import{CardCostumeService}from'src/app/services/card-costume.service';

@Component({
  selector: 'app-card-costume',
  templateUrl: './card-costume.component.html',
  styleUrls: ['./card-costume.component.css']
})

export class CardCostumeComponent implements OnInit {

  costumes:Costume[]=[];

  constructor(
    private cardCostumeService:CardCostumeService
  ) { }



  ngOnInit(): void {
    this.getAllCostumes();
  }



  public getAllCostumes():void{
     this.cardCostumeService.listAll().subscribe(
       res=>{
         this.costumes=res;

         console.log("RESPUESTA COSTUMESE CARD");
         console.log(res);
       },
       err=>{
         console.error(err);
       }
     );
       

  }



}
