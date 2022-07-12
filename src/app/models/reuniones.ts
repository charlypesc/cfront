import { ParticipanteManual } from "./participanteManual";
import { ProtocoloReu } from "./protocoloReu";
import { TematicasReu } from "./tematicaReu";


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
    folio?:number;
    participanteManual?:ParticipanteManual[];
    protocoloReu?:ProtocoloReu[];
    tematicasReu?:TematicasReu[];

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
        folio?:number,
        participanteManual?:ParticipanteManual[],
        protocoloReu?:ProtocoloReu[],
        tematicasReu?:TematicasReu[])
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
            this.participanteManual=participanteManual
            this.protocoloReu=protocoloReu
            this.tematicasReu=tematicasReu    
            this.folio=folio
        }

}