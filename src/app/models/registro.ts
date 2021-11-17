import { ParticipanteReg } from "./participanteReg";

export class Registro{
    id?:string;
    profesional:string;
    asunto:string;
    fecha:Date;
    antecendentes:string;
    acuerdos:string;
    participanteReg:ParticipanteReg[];

    constructor(profesional:string, asunto:string, fecha:Date, antecendentes:string,  acuerdos:string,  participanteReg:ParticipanteReg[],id?:string,){

        this.profesional=profesional;
        this.asunto=asunto;
        this.fecha=fecha;
        this.antecendentes=antecendentes;
        this.acuerdos=acuerdos;
        this.participanteReg=participanteReg; 

    }
}