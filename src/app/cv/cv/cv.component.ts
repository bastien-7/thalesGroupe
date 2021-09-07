import { Component, OnInit } from '@angular/core';
import { Cv } from 'src/app/models/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
selectedCv: Cv;
  constructor() { }

  ngOnInit(): void {
  }

  onItemClicked(selectedCv: Cv):void{
this.selectedCv = selectedCv;
}
}
