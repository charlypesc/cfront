import { StringValueToken } from "html2canvas/dist/types/css/syntax/tokenizer";
import { ParticipanteReg } from "./participanteReg";
import { ProtocolosActuacion } from "./protocolosActuacion";
import { TematicasReg } from "./tematicasReg";

export class Reuniones 
{
    id?:number;
    profesional:string;
    asunto:string;
    fecha:Date;
    rbd:string;
    tipoReunion?:string;
    rutAsociado?:string;
    antecedentes?:string;
    acuerdos?:string;
    activo?:number;
    tipo?:string;
    usuarioId?:number;
    participanteReg?:ParticipanteReg[];
    protocoloReg?:ProtocolosActuacion[];
    tematicasReg?:TematicasReg[];

    constructor(
        profesional:string,
        asunto:string,
        fecha:Date,
        rbd:string,
        id?:number,
        tipoReunion?:string,
        rutAsociado?:string,
        antecedentes?:string,
        acuerdos?:string,
        activo?:number,
        tipo?:string,
        usuarioId?:number,
        participanteReg?:ParticipanteReg[],
        protocoloReg?:ProtocolosActuacion[],
        tematicasReg?:TematicasReg[])
        {

            this.id=id
            this.profesional=profesional
            this.asunto=asunto
            this.fecha=fecha
            this.rbd=rbd
            this.tipoReunion=tipoReunion
            this.rutAsociado=rutAsociado
            this.antecedentes=antecedentes
            this.acuerdos=acuerdos
            this.activo=activo
            this.tipo=tipo
            this.usuarioId=usuarioId
            this.participanteReg=participanteReg
            this.protocoloReg=protocoloReg
            this.tematicasReg=tematicasReg    

        }

}