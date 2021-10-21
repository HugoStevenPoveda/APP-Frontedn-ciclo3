import { Component, OnInit } from '@angular/core';
import{Costume}from'src/app/models/costume';
import{Category}from'src/app/models/category';
import{CostumeService}from'src/app/services/costume.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-costume',
  templateUrl: './costume.component.html',
  styleUrls: ['./costume.component.css']
})

export class CostumeComponent implements OnInit {

  //ATRIBUTOS
  costume:Costume={
    "name": " ",
    "brand":"",
    "year": 0,
    "description":"",
    "category":new Category(" "," ")


  };


  constructor(
     private costumeService:CostumeService,
     private activatedRoute: ActivatedRoute,
     private toastr: ToastrService,
     private router: Router
     ) { }



  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.getElementForId(id);
  }


  public getElementForId(id:any):void{
    this.costumeService.getById(id).subscribe(
      res=>{
        
        this.costume =res;
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
      this.router.navigate(['/costume']);
    }






}
