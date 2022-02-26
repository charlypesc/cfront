export class Usuario {
    id?:number
    nombreUsuario: string
    password:string
    nivel?:string
    nombre?:string
    apellido?:string
    rut?:string
    correoElectronico?:string
    establecimiento?:string
    rbd?:string
    activo?:number
    constructor(    
        nombreUsuario: string,
        password:string,
        id?:number,
        nivel?:string,
        nombre?:string,
        apellido?:string,
        rut?:string,
        correoElectronico?:string,
        establecimiento?:string,
        rbd?:string,
        activo?:number){


            this.id=id
            this.nombreUsuario=nombreUsuario
            this.password=password
            this.nivel=nivel
            this.nombre=nombre
            this.apellido=apellido
            this.rut=rut
            this.correoElectronico=correoElectronico
            this.establecimiento=establecimiento
            this.rbd=rbd
            this.activo=activo

    }
}