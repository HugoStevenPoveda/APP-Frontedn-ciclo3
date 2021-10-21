export class Reservation {

   idReservation ?:number;
    startDate:any;
    devolutionDate:any;
    status?:String;
    costume:any;
    client:any;
    score? :any;

    constructor(
        startDate:any,
        devolutionDate:any,

        costume:any,
        client:any,
        
        ){
            this.startDate=startDate,
            this.devolutionDate=devolutionDate,
            
            this.costume=costume,
            this.client=client
            
        }
















}
