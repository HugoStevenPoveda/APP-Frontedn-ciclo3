import { Component, OnInit } from '@angular/core';
import{Client}from'src/app/models/client';
import{ClientService}from'src/app/services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  //ATRIBUTOS
  client:Client = {
    "name": "",
    "age": 0,
    "email":"",
    "password": ""



  }

  constructor(
    private clientService:ClientService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.getElementForId(id);
  }

  public getElementForId(id:any):void{
    this.clientService.getById(id).subscribe(
      res=>{
        
        this.client =res;
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
      this.router.navigate(['/client']);
    }


}
