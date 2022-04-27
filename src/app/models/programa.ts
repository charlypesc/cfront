export class Programa {
    id?:number;
    creadoPor?:string
    fechaCreacionPrograma?:Date
    nombrePrograma?:Date
    descripcionPrograma?:string
    activo?:number
    rbd?:string

    constructor
    (
        id?:number,
        creadoPor?:string,
        fechaCreacionPrograma?:Date,
        nombrePrograma?:Date,
        descripcionPrograma?:string,
        activo?:number,
        rbd?:string,
    
    )
    {
        this.id=id
        this.creadoPor=creadoPor
        this.fechaCreacionPrograma=fechaCreacionPrograma
        this.nombrePrograma=nombrePrograma
        this.descripcionPrograma=descripcionPrograma
        this.activo=activo
        this.rbd=rbd
    }
}