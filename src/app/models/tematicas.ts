export class Tematicas{
    id?:number;
    tematica?:string;
    descripcion?:string
    rbd?:string
    constructor(id?:number,
                tematica?:string,
                descripcion?:string,
                rbd?:string)
    {
        this.id=id
        this.tematica=tematica
        this.descripcion=descripcion
        this.rbd=rbd
    }
}