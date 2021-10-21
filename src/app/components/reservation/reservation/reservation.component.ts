import { Component, OnInit } from '@angular/core';
import{Reservation}from'src/app/models/reservation';
import{ReservationService}from'src/app/services/reservation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    "status":"Create",
    "costume":"",
    "client":"",
    "score" :"",
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
        
        this.reservation=res;
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



}
