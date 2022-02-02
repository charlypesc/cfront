export class ProtocoloReu{
    id?:number
    nombreProtocolo?: string
    descripcionProtocolo?:string
    rbd?: string
    nombreEstablecimiento?:string
    
    constructor(nombreProtocolo?: string, descripcionProtocolo?:string, rbd?: string, nombreEstablecimiento?:string, id?:number){
        this.nombreProtocolo            = nombreProtocolo
        this.descripcionProtocolo       = descripcionProtocolo
        this.rbd                        = rbd
        this.nombreEstablecimiento      = nombreEstablecimiento
        this.id                         = id
    }
}