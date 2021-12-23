import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from "ngx-simple-modal";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-visita-domicialiaria',
  templateUrl: './visita-domicialiaria.component.html',
  styleUrls: ['./visita-domicialiaria.component.css']
})
export class VisitaDomicialiariaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  async modal(){

const text = await Swal.fire({
  input: 'text',
  inputLabel: 'Ingresa Nombre Participante',
  inputPlaceholder: 'Ingresa Nombre',
  inputAttributes: {
    'aria-label': 'Type your message here'
  },
  
  showCancelButton: true
})

  if (text.value) {

    const rut = await Swal.fire({
      input: 'text',
      inputLabel: 'Ingresa rut sin puntos ni guiones',
      inputPlaceholder: 'ej:179484170',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      
      showCancelButton: true
    })
    if(rut){
      console.log(text)
      console.log(rut)
    }
  }
}

}
