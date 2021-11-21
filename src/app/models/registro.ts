import { ParticipanteReg } from "./participanteReg";

export class Registro{
    id?:number;
    profesional:string;
    asunto:string;
    fecha:Date;
    antecedentes?:string;
    acuerdos?:string;
    usuarioId?:number;
    participanteReg?:ParticipanteReg[];

    constructor(profesional:string, asunto:string, fecha:Date, antecedentes?:string, participanteReg?:ParticipanteReg[],id?:string,usuarioId?:number,acuerdos?:string,){

        this.profesional=profesional;
        this.asunto=asunto;
        this.fecha=fecha;
        this.antecedentes=antecedentes;
        this.acuerdos=acuerdos;
        this.usuarioId=usuarioId;
        this.participanteReg=participanteReg; 

    }
}