import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cv } from 'src/app/models/cv.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
cvs: Cv[] = [];
@Output() onItemSelected = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.cvs.push(new Cv(1,'terrier1', 'bastien1',11,'train1','rotating_card_profile.png',1));
    this.cvs.push(new Cv(2,'terrier2', 'bastien2',22,'train2','rotating_card_profile2.png',2));
  }
  onItemClicked(selectedCv: Cv):void{
this.onItemSelected.emit(selectedCv);
  }
}
