import{Category}from'src/app/models/category';
export class Costume {

    //ATRIBUTOS
    id?:number;
    name: string;
    brand:string;
    year: number;
    description: string;
    category:any;
    
    //CONSTRUCTOR
    constructor(name: string,brand:string,year: number,description: string,category:any){
        this.name=name;
        this.brand=brand;
        this.year=year;
        this.description=description;
        this.category=category;
        

    }

    

}
