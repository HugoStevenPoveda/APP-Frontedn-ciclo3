export class Client {


    //ATRIBUTOS
    idClient?:number;
    name: string;
    age: number;
    email: string;
    password: string;

    //CONSTRUCTOR
    constructor( name: string , age: number,email: string, password: string){
      this.name = name;
      this.email = email;
      this.password = password;
      this.age=age;


    }


}
