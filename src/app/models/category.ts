export class Category {

    //ATRIBUTOS
    id?:number;
    //private name:string;
     name:string;
     description: string;

    //COSTRUCTOR

    constructor(name:string,description:string){
        this.name = name;
        this.description=description;
        
    }




    //METODOS 

    /*public getDescription():String{
        return this.description;
    }

    public setDescription(description:string):void{
        this.description = description;
    }

    public getName():string{
        return this.name;
    }

    public setName(name:string):void{
        this.name = name;
    }

    */




}
