export class Message {
    
    //ATRIBUTOS
    idMessage?:number;
    messageText:String;
    costume:any;
    client:any;

    //CONSTRUCTOR
    constructor(messageText:String,costume:any,client:any){
        this.messageText=messageText;
        this.costume=costume;
        this.client=client;


    }


}
