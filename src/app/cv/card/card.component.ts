import { Component, Input, OnInit } from '@angular/core';
import { Cv } from 'src/app/models/cv.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cv:Cv;
  constructor() { }

  ngOnInit(): void {
  }

}
