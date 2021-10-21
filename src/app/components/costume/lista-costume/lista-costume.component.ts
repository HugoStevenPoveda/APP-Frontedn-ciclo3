import { Component, OnInit } from '@angular/core';
import{Costume}from'src/app/models/costume';
import{CostumeService}from'src/app/services/costume.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-costume',
  templateUrl: './lista-costume.component.html',
  styleUrls: ['./lista-costume.component.css']
})

export class ListaCostumeComponent implements OnInit {

  costumes:Costume[]=[];

  constructor(
      private costumeService:CostumeService,
      private toastr:ToastrService
      ) { }



  ngOnInit(): void {
    this.listAll();
  }

  public listAll():void{
    this.costumeService.listAll().subscribe(
      res=>{ 
        console.log(res);
        this.costumes = res;
      },
      err=>{
        console.error(err);
      }
      );
    }
      



public delete(id:any){

    this.costumeService.deleteElement(id).subscribe(
       res=>{
        this.toastr.success('Costume eliminada','OK',
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
