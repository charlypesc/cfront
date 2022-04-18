import { ParticipanteReg } from "./participanteReg";
import { ProtocolosActuacion } from "./protocolosActuacion";
import { TematicasReg } from "./tematicasReg";

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
    tematicasReg?:TematicasReg[];
    folio?:number;

    constructor(profesional:string, 
        asunto:string, 
        fecha:Date, 
        antecedentes?:string, 
        participanteReg?:ParticipanteReg[],
        id?:string,
        usuarioId?:number,
        acuerdos?:string,
        rbd?:string, 
        folio?:number,
        protocoloReg?:ProtocolosActuacion[],
        tematicasReg?:TematicasReg[])
        {

        this.profesional=profesional;
        this.asunto=asunto;
        this.fecha=fecha;
        this.antecedentes=antecedentes;
        this.acuerdos=acuerdos;
        this.usuarioId=usuarioId;
        this.rbd=rbd;
        this.participanteReg=participanteReg; 
        this.protocoloReg=protocoloReg
        this.tematicasReg=tematicasReg
        this.folio=folio
        }
}