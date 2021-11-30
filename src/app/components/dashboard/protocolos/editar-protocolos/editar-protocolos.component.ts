import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProtocolosService } from 'src/app/services/protocolos.service';

@Component({
  selector: 'app-editar-protocolos',
  templateUrl: './editar-protocolos.component.html',
  styleUrls: ['./editar-protocolos.component.css']
})
export class EditarProtocolosComponent implements OnInit {
id:number
protocoloData:any={};
  constructor(	private aRoute:ActivatedRoute,
            	private protocolosService: ProtocolosService){

    this.id = +this.aRoute.snapshot.paramMap.get('numIdProtocolo')
  }

  ngOnInit(): void {
    console.log(this.id)
	this.getProtocolo();
  }
  getProtocolo(){
    this.protocolosService.getProtocoloById(this.id).subscribe(data=>{
		this.protocoloData=data;
		console.log(this.protocoloData);
	})
  }
}
