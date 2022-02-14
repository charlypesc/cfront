import { ListaDoctosDenuncia } from "./ListaDoctosDenuncia"

export class Denuncia{
    id?:number
    profesional?:string
    organismo?:string
    rutAsociado?:string
    folioRit?:string
    folioInterno?:number
    fechaIngreso?:Date
    fechaAsignada?:Date
    ListaDoctosDenuncia?:ListaDoctosDenuncia[]


    constructor(
        id?:number,    
        profesional?:string,
        organismo?:string,
        rutAsociado?:string,
        folioRit?:string,
        folioInterno?:number,
        fechaIngreso?:Date,
        fechaAsignada?:Date,
        ListaDoctosDenuncia?:ListaDoctosDenuncia[]
    ){
        this.id=id,
        this.profesional=profesional
        this.organismo=organismo
        this.rutAsociado=rutAsociado
        this.folioRit=folioRit
        this.folioInterno=folioInterno
        this.fechaIngreso=fechaIngreso
        this.fechaAsignada=fechaAsignada
        this.ListaDoctosDenuncia=ListaDoctosDenuncia
    }
}