import { Component, OnInit } from '@angular/core';
import{Reservation}from'src/app/models/reservation';

import{ReservationService}from'src/app/services/reservation.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

import * as moment from 'moment';
moment.locale('es');


@Component({
  selector: 'app-editar-reservation',
  templateUrl: './editar-reservation.component.html',
  styleUrls: ['./editar-reservation.component.css']
})
export class EditarReservationComponent implements OnInit {

  //ATRIBUTOS
  reservation:Reservation={
    "idReservation":0,
    "startDate":this.formatoFecha(""),
    "devolutionDate":"",
    "costume":{"id":1},
    "client":{"idClient":1}
  }

   //ARRAY FOR CLIENT
   listClient:any[]=[];
   //ARRAY FOR CLIENT
   listCostume:any[]=[];


  constructor(
    private reservationService:ReservationService,
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
    this.reservationService.getById(id).subscribe(
      res=>{
        this.reservation.idReservation=res.idReservation;
        this.reservation.startDate =this.formatoFecha(res.startDate);
        this.reservation.devolutionDate =this.formatoFecha(res.devolutionDate);
        this.reservation.client =res.client;
        this.reservation.costume =res.costume;
      },
      err=>{

        this.toastr.error('No se puede Editar','Fail',
        {
          timeOut:3000,positionClass:'toast-top-center'
        });
        this.router.navigate(['/reservation']);
      }
      );
        
    }
        
        


    public onUpdate():void{
      

      const reservationUpdate:Reservation={
        "idReservation":this.reservation.idReservation,
        "startDate":this.reservation.startDate,
        "devolutionDate":this.reservation.devolutionDate, 
        "costume":{"id":this.reservation.costume.id},
        "client":{"idClient":this.reservation.client.idClient}
       
      }
      console.log("//////");
      console.log("reservationUpdate-----");
      console.log(reservationUpdate);
      console.log("//////");
     
      this.reservationService.updateElement(reservationUpdate).subscribe(
        data=>{
         
           this.toastr.success('Reservation Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/reservation']);


        },
        err=>{

          this.toastr.error('No se puede editar','Fail',
        {
          timeOut:3000,positionClass:'toast-top-center'
        });
        this.router.navigate(['/reservation']);

        }

      );
    }

    public formatoFecha(fecha:any):any{
      return moment(fecha).format("YYYY-MM-DD");

     }


     public listIdClients():void{
      this.reservationService.listClientForId().subscribe(
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
      this.reservationService.listCostumeForId().subscribe(
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
        



