import { Component, OnInit } from '@angular/core';
import{Reservation}from'src/app/models/reservation';
import{ReservationService}from'src/app/services/reservation.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-reservation',
  templateUrl: './lista-reservation.component.html',
  styleUrls: ['./lista-reservation.component.css']
})

export class ListaReservationComponent implements OnInit {

  reservations:Reservation[]=[];

  constructor(
    private reservationService:ReservationService,
    private toastr:ToastrService

  ) { }

 
  ngOnInit(): void {
    this.listAll();
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

}
