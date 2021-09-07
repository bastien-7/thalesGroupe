import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from 'src/app/models/cv.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() cv: Cv;
  @Output() itemSelected = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onItemClicked():void{
    this.itemSelected.emit(this.cv);
  }
}
