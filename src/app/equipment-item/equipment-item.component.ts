import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-equipment-item',
  templateUrl: './equipment-item.component.html',
  styleUrls: ['./equipment-item.component.css']
})
export class EquipmentItemComponent implements OnInit {
  @Input() item;

  open: boolean;

  constructor() {
    this.open = false;
  }


  ngOnInit() {
  }

}
