export class Denuncia{
    profesional?:string
    organismo?:string
    rutAsociado?:string
    folioRit?:string
    folioInterno?:number
    fechaIngreso?:Date
    fechaAsignada?:Date


    constructor(    
        profesional?:string,
        organismo?:string,
        rutAsociado?:string,
        folioRit?:string,
        folioInterno?:number,
        fechaIngreso?:Date,
        fechaAsignada?:Date,
    ){
        this.profesional=profesional
        this.organismo=organismo
        this.rutAsociado=rutAsociado
        this.folioRit=folioRit
        this.folioInterno=folioInterno
        this.fechaIngreso=fechaIngreso
        this.fechaAsignada=fechaAsignada

    }
}