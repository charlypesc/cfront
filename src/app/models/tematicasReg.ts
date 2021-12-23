export class TematicasReg{
    id?:number;
    tematica?:string;
    descripcion?:string;
    rbd?:string;
    tipoFormulario?:string;
    numeroId?:number;

    constructor(id?:number,
                tematica?:string,
                descripcion?:string,
                rbd?:string,
                tipoFormulario?:string,
                numeroId?:number)
    {
        this.id=id;
        this.tematica=tematica;
        this.descripcion=descripcion;
        this.rbd=rbd;
        this.tipoFormulario=tipoFormulario
        this.numeroId=numeroId;

    }
}