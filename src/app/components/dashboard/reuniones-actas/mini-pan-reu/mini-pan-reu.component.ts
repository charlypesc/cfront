import { Component, OnInit } from '@angular/core';
import { faClipboard, faClipboardList, faEye, faFile, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mini-pan-reu',
  templateUrl: './mini-pan-reu.component.html',
  styleUrls: ['./mini-pan-reu.component.css']
})
export class MiniPanReuComponent implements OnInit {
faSearch=faClipboardList;
faFilePlus=faClipboard;
  constructor() { }

  ngOnInit(): void {
  }

}
