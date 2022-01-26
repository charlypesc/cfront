import { Component, OnInit } from '@angular/core';
import { TematicasService } from 'src/app/services/tematicas.service';

@Component({
  selector: 'app-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.css']
})
export class ProgramasComponent implements OnInit {
lstStaticData:any;
  constructor(private tematicasService: TematicasService) { }

  ngOnInit(){
  

  }

}
