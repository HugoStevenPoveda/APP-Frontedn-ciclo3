import { Component, OnInit } from '@angular/core';
import{Reservation}from'src/app/models/reservation';
import{ReservationService}from'src/app/services/reservation.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-reservation',
  templateUrl: './agregar-reservation.component.html',
  styleUrls: ['./agregar-reservation.component.css']
})
export class AgregarReservationComponent implements OnInit {

  //ATRIBUTOS
  startDate = "";
  devolutionDate = "";
  costume = 0;
  client = 0;
  

  constructor(
    private reservationService:ReservationService,
    private toastr:ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public onCreate():void{

    const reservation:Reservation={
     "startDate":this.startDate,
     "devolutionDate":this.devolutionDate, 
     "costume":{"id":this.costume},
     "client":{"idClient":this.client}
    
   }
   console.log("///////////////");
   console.log(reservation);
   console.log("///////////////");
   

    this.reservationService.createElement(reservation).subscribe(
      res=>{
        this.toastr.success('Reservation Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/reservation']);


      },
      err=>{
        this.toastr.error('No se pudo crear','Fail',
          {
            timeOut:3000,positionClass:'toast-top-center'
          });
          this.router.navigate(['/reservation']);


      }
      )

    }

}
