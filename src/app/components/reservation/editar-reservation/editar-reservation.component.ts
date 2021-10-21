import { Component, OnInit } from '@angular/core';
import{Reservation}from'src/app/models/reservation';
import { Costume } from 'src/app/models/costume';
import{ReservationService}from'src/app/services/reservation.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-editar-reservation',
  templateUrl: './editar-reservation.component.html',
  styleUrls: ['./editar-reservation.component.css']
})
export class EditarReservationComponent implements OnInit {

  //ATRIBUTOS
  reservation:Reservation={

    "startDate":"",
    "devolutionDate":"",
    "client":new Client(" ",0," ",""),
    "costume":new Costume(" "," ",0," ",0)
  }


  constructor(
    private reservationService:ReservationService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router

  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.getElementForId(id);
   
    
  }

  public getElementForId(id:any):void{
    this.reservationService.getById(id).subscribe(
      res=>{
        
        this.reservation =res;
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

}
