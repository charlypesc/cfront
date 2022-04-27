export class Estudiante{
    id?:number
    nombre:string;
    apellido:string;
    curso:string;
    establecimiento:string;
    run:string;
    rbd:string;
    nacimiento?:Date;
    sexo?:string;
    direccion?:string;
    comuna?:string;
    correo?:string;
    telefono?:string;
    contactoEmergencia?:string;
    telefonoEmergencia?:string;
    grupoSanguineo?:string;
    prevision?:string;
    alergias?:string;
    medicamentosContraindicados?:string;
    enfermedadesCronicas?:string;
    apoderado:string;
    direccionApoderado:string;
    telefonoApoderado:string;
    correoApoderado?:string;
    apoderadoSuplente?:string;
    direccionApoderadoSuplente?:string;
    telefonoApoderadoSuplente?:string;
    correoApoderadoSuplente?:string;
    pie?:boolean;
    anoCursando?:number
    activo?:number
    seguimiento?:number;

    constructor(nombre:string, apellido:string, curso:string, establecimiento:string, run:string, apoderado:string, 
                direccionApoderado:string, telefonoApoderado:string, rbd:string, id?:number, nacimiento?:Date, sexo?:string, direccion?:string, comuna?:string,
                correo?:string, telefono?:string, contactoEmergencia?:string, telefonoEmergencia?:string, grupoSanguineo?:string, prevision?:string, alergias?:string, medicamentosContraindicados?:string,
                enfermedadesCronicas?:string, correoApoderado?:string, apoderadoSuplente?:string, direccionApoderadoSuplente?:string, telefonoApoderadoSuplente?:string,
                correoApoderadoSuplente?:string, pie?:boolean, anoCursando?:number, activo?:number, seguimiento?:number ){
                    this.id=id
                    this.nombre  = nombre;
                    this.apellido = apellido;
                    this.curso = curso;
                    this.establecimiento = establecimiento;
                    this.run = run;
                    this.nacimiento = nacimiento;
                    this.sexo=sexo;
                    this.direccion = direccion;
                    this.comuna = comuna;
                    this.correo= correo;
                    this.telefono= telefono;
                    this.contactoEmergencia = contactoEmergencia;
                    this.telefonoEmergencia = telefonoEmergencia;
                    this.grupoSanguineo = grupoSanguineo;
                    this.prevision = prevision;
                    this.alergias = alergias;
                    this.medicamentosContraindicados = medicamentosContraindicados;
                    this.enfermedadesCronicas = enfermedadesCronicas;
                    this.apoderado = apoderado;
                    this.direccionApoderado = direccionApoderado; 
                    this.telefonoApoderado = telefonoApoderado;
                    this.correoApoderado = correoApoderado;
                    this.apoderadoSuplente = apoderadoSuplente;
                    this.direccionApoderadoSuplente = direccionApoderadoSuplente;
                    this.telefonoApoderadoSuplente = telefonoApoderadoSuplente;
                    this.correoApoderadoSuplente = correoApoderadoSuplente;
                    this.pie = pie;
                    this.rbd = rbd;
                    this.anoCursando=anoCursando
                    this.activo=activo
                    this.seguimiento=seguimiento;

    }
}