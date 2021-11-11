
export class Establecimiento{
    nombreEstablecimiento: string;
    rbd: string;
    direccion: string;
    comuna: string;
    telefono:string;
    director:string;

    constructor(nombreEstablecimiento:string, rbd:string, direccion:string, comuna:string, telefono:string, director:string ){
        this.nombreEstablecimiento=nombreEstablecimiento;
        this.rbd=rbd;
        this.direccion=direccion;
        this.comuna=comuna;
        this.telefono=telefono;
        this.director=director;
    }
}