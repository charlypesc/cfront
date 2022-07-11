export class SeguimientoProg{
    id?:number
    nombrePrograma?:string
    notaPrograma?:string
    fechaIngreso?:Date
    fechaEgreso?:Date
    activo?:number
    rbd?:string
    ingresadoPor?:string

    constructor
    (
        id?:number,
        nombrePrograma?:string,
        notaPrograma?:string,
        fechaIngreso?:Date,
        fechaEgreso?:Date,
        activo?:number,
        rbd?:string,
        ingresadoPor?:string

    )
    {
        this.id=id;
        this.nombrePrograma=nombrePrograma
        this.notaPrograma=notaPrograma
        this.fechaIngreso=fechaIngreso
        this.fechaEgreso=fechaEgreso
        this.activo=activo 
        this.rbd=rbd
        this.ingresadoPor=ingresadoPor
    }


}