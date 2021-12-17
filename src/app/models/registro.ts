import { ParticipanteReg } from "./participanteReg";
import { ProtocolosActuacion } from "./protocolosActuacion";

export class Registro{
    id?:number;
    profesional:string;
    asunto:string;
    fecha:Date;
    antecedentes?:string;
    acuerdos?:string;
    usuarioId?:number;
    rbd?:string;
    participanteReg?:ParticipanteReg[];
    protocoloReg?:ProtocolosActuacion[];

    constructor(profesional:string, asunto:string, fecha:Date, antecedentes?:string, participanteReg?:ParticipanteReg[],id?:string,usuarioId?:number,acuerdos?:string,rbd?:string, protocoloReg?:ProtocolosActuacion[]){

        this.profesional=profesional;
        this.asunto=asunto;
        this.fecha=fecha;
        this.antecedentes=antecedentes;
        this.acuerdos=acuerdos;
        this.usuarioId=usuarioId;
        this.rbd=rbd;
        this.participanteReg=participanteReg; 
        this.protocoloReg=protocoloReg

    }
}