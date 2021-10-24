import { Component, OnInit } from '@angular/core';
import {CostumeService } from 'src/app/services/costume.service';
import { Costume} from 'src/app/models/costume';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-costume',
  templateUrl: './editar-costume.component.html',
  styleUrls: ['./editar-costume.component.css']
})
export class EditarCostumeComponent implements OnInit {

   //ATRIBUTOS
   costume:Costume={
    "name": " ",
    "brand":"",
    "year": 0,
    "description":"",
    "category":{"id":1}
  };
  listCategory:any[]=[];



  constructor(
    private costumeService:CostumeService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.getElementForId(id);
    this.listCategorys();
    console.log("COSTUME INICIAL")
      console.log(this.costume)
    



  }

  
  public getElementForId(id:any):void{
    this.costumeService.getById(id).subscribe(
      res=>{
         this.costume =res;
         console.log("COSTUME TRAIDO")
      console.log(this.costume)
        },
        err=>{
  
          this.toastr.error('No se puede Editar','Fail',
          {
            timeOut:3000,positionClass:'toast-top-center'
          });
          this.router.navigate(['/costume']);
        }
        );
  
      }
        




    public onUpdate():void{
      console.log("COSTUME ENVIADO")
      console.log(this.costume)
      this.costumeService.updateElement(this.costume).subscribe(
        data=>{
         
           this.toastr.success('Costume Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/costume']);


        },
        err=>{

          this.toastr.error('No se puede editar','Fail',
        {
          timeOut:3000,positionClass:'toast-top-center'
        });
        this.router.navigate(['/costume']);

        }

      );
    
    }

    public listCategorys():void{
      this.costumeService.listCategoryForId().subscribe(
        res=>{
          console.log("RESPUESTA ARRAY")
          console.log(res)
          let indice =0;
          for(let i in res){
            this.listCategory[indice] = res[i].id;
            indice++;
          }
        },
        err=>{
          console.log(err);
        }
        );
      }  



        






}
