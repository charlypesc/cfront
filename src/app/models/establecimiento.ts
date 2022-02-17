
export class Establecimiento{
    id?:number
    nombreEstablecimiento: string;
    rbd: string;
    direccion: string;
    comuna: string;
    telefono:string;
    director:string;
    activo?:number;

    constructor(nombreEstablecimiento:string, rbd:string, direccion:string, comuna:string, telefono:string, director:string, id?:number, activo?:number){
        this.id=id
        this.nombreEstablecimiento=nombreEstablecimiento;
        this.rbd=rbd;
        this.direccion=direccion;
        this.comuna=comuna;
        this.telefono=telefono;
        this.director=director;
        this.activo=activo
    }
}