export class ParticipanteReg{
    id:string;
    rut:string;
    nombreParticipante:string;
    fechaIngreso:Date;
    asunto:string;
    activo:number;
    usuarioId:number;
    registroId:number;

    constructor(id:string, rut:string, nombreParticipante:string, fechaIngreso:Date, asunto:string, activo:number, usuarioId:number, registroId:number){
        this.id =id;
        this.rut=rut;
        this.fechaIngreso=fechaIngreso;
        this.asunto=asunto;
        this.activo=activo;
        this.usuarioId=usuarioId;
        this.registroId=registroId;
    }
}