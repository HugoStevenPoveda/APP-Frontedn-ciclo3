import { Component, OnInit } from '@angular/core';
import{Reservation}from'src/app/models/reservation';
import{ReservationService}from'src/app/services/reservation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
moment.locale('es');

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {


  //ATRIBUTOS
  reservation:Reservation={

    "startDate":"",
    "devolutionDate":"",
    "costume":"",
    "client":"",
    
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
        this.reservation.idReservation=res.idReservation;
        this.reservation.startDate =this.formatoFecha(res.startDate);
        this.reservation.devolutionDate =this.formatoFecha(res.devolutionDate);
        this.reservation.client =res.client;
        this.reservation.costume =res.costume;
        
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
      this.router.navigate(['/reservation']);
    }

    public formatoFecha(fecha:any):any{
      return moment(fecha).format("D MMMM YYYY");

     }



}
