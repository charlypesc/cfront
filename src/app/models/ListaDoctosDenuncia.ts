export class ListaDoctosDenuncia{
    id?:number;
    profesional?:string;
    asunto?:string;
    fecha?:Date;
    rbd?:string;
    tipoReunion?:string;
    tipoDoc?:string;
    idPropioDoc?:number;
    usuarioId?:number;

    constructor(id?:number,
        profesional?:string,
        asunto?:string,
        fecha?:Date,
        rbd?:string,
        tipoReunion?:string,
        tipoDoc?:string,
        idPropioDoc?:number,
        usuarioId?:number
        ){
            this.id=id;
            this.profesional=profesional
            this.asunto=asunto
            this.fecha=fecha
            this.rbd=rbd
            this.tipoReunion=tipoReunion
            this.tipoDoc=tipoDoc
            this.idPropioDoc=idPropioDoc
            this.usuarioId=usuarioId
    }

}