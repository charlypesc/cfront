export class Funcionario{
    id?: number;
    nombre: string;
    apellido: string;
    rut: string;
    telefono?: string;
    correoElectronico: string;
    direccion?: string;
    establecimiento:string;
    cargo: string;
    rbd:string;
    activo?:number

    constructor(nombre:string, apellido:string, rut:string, correoElectronico:string, establecimiento:string, cargo:string, rbd:string, id?:number, telefono?:string, direccion?:string, activo?:number){
    this.id = id;
    this.nombre = nombre;
    this.apellido= apellido;
    this.rut=rut;
    this.telefono=telefono;
    this.correoElectronico=correoElectronico;
    this.direccion=direccion;
    this.establecimiento=establecimiento;
    this.cargo=cargo;
    this.rbd=rbd;
    this.activo=activo
    }
}