import { Component, OnInit } from '@angular/core';
import{Reservation}from'src/app/models/reservation';
import{ReservationService}from'src/app/services/reservation.service';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

moment.locale('es');
@Component({
  selector: 'app-lista-reservation',
  templateUrl: './lista-reservation.component.html',
  styleUrls: ['./lista-reservation.component.css']
})

export class ListaReservationComponent implements OnInit {

  reservations:Reservation[]=[];
  hoy:any;

  constructor(
    private reservationService:ReservationService,
    private toastr:ToastrService,
    

  ) {

    this.hoy=moment(); 
   }

 
  ngOnInit(): void {
    this.listAll();
    console.log("/// fecha--moment")
    console.log(this.hoy.format('YYYY-MM-DD'));
    console.log(this.hoy.format("MMMM D, YYYY"));
    console.log(this.hoy.format("dddd Do MMM YYYY"));
    console.log("/// FECHA FORMATO")
    console.log(moment("2021-10-26T05:00:00.000+00:00").format("MMMM D, YYYY"));
  }

  public listAll():void{
    this.reservationService.listAll().subscribe(
      res=>{ 
        console.log(res);
        this.reservations = res;
      },
      err=>{
        console.error(err);
      }
      );
    }
      



public delete(id:any){

    this.reservationService.deleteElement(id).subscribe(
       res=>{
        this.toastr.success('Reservation eliminada','OK',
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

      public formatoFecha(fecha:any):any{
       return moment(fecha).format("D MMMM YYYY");

      }


}


