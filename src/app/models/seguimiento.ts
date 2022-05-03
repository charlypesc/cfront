export class Seguimiento {
    id?:number;
    rutEstudiante?: string;
    nota?:string;
    fechaInicioSeguimiento?:Date
    fechaFinSeguimiento?:Date
    usuarioId?:number
    activo?:number
    rbd?: string;
    // seguimientoProg= seguimientoProg=[]
   constructor
        (
            id:number,
            rutEstudiante?: string,
            nota?:string,
            fechaInicioSeguimiento?:Date,
            fechaFinSeguimiento?:Date,
            usuarioId?:number,
            activo?:number,
            rbd?: string
        )
        {

            this.id=id;
            this.rutEstudiante=rutEstudiante
            this.nota=nota;
            this.fechaInicioSeguimiento =fechaInicioSeguimiento
            this.fechaFinSeguimiento=fechaFinSeguimiento
            this.usuarioId=usuarioId
            this.activo=activo
            this.rbd=rbd

        }
}