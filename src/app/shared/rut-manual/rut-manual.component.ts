import { Component, OnInit } from '@angular/core';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { ParticipanteManual } from 'src/app/models/participanteManual';
import { ParticipanteReg } from 'src/app/models/participanteReg';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { ParticipantesManualService } from 'src/app/services/participantes-manual.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rut-manual',
  templateUrl: './rut-manual.component.html',
  styleUrls: ['./rut-manual.component.css']
})
export class RutManualComponent implements OnInit {
  listParticipantesManual:ParticipanteManual[]=[]

  constructor(private participanteManualService: ParticipantesManualService,
              private estudianteService: EstudianteService) { }

  ngOnInit(): void {
  }
  async ingresoParticipante(){
    const { value: rut } = await Swal.fire({
      title: 'Ingresa numero RUT',
      input: 'text',
      inputLabel: 'Ingresa RUT',
      inputPlaceholder: 'Ej: 17999888K'
    })
    
    if (rut) {
      this.estudianteService.getEstudianteByRut(rut).subscribe(async data=>{
        // si el resultado es positivo debe llenar los datos
        console.log(data)
        if(data.codigo !=0){
          const partManual: ParticipanteManual = new ParticipanteManual()
            partManual.rut=data.run
            partManual.nombreParticipante=data.nombre
          this.listParticipantesManual.push(partManual)
          
        }
        else{

          const { value: nombre } = await Swal.fire({
          title: 'Ingresa Nombre y Apellido',
          input: 'text',
          inputLabel: 'Nombre y apellido',
          inputPlaceholder: 'Ej: Carlos Escobar'
          })
          if(rut && nombre){
            const partManual: ParticipanteManual = new ParticipanteManual()
            partManual.rut=rut
            partManual.nombreParticipante=nombre
            this.listParticipantesManual.push(partManual)
            // console.log(this.listParticipantesManual)
            this.participanteManualService.lstParticipanteManual=this.listParticipantesManual
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Participante manual ingresado correctamente',
              showConfirmButton: false,
              timer: 1000
            })
          }
        }
      })
    }
  }

  deleteRutManual(inde:number):void{
    Swal.fire({
      title: 'Eliminar rut?',
      text: "Puedes revertir ingresando nuevamente el rut",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, quitar'
    }).then((result) => {
      if (result.isConfirmed) {
          this.listParticipantesManual.splice(inde,inde+1)
      }
    })


  }
}
