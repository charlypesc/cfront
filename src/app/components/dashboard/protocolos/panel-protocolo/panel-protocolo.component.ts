import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-panel-protocolo',
  templateUrl: './panel-protocolo.component.html',
  styleUrls: ['./panel-protocolo.component.css']
})
export class PanelProtocoloComponent implements OnInit {
  faSearch = faSearch
  constructor() { }

  ngOnInit() {
    console.log(localStorage)
  }

}
