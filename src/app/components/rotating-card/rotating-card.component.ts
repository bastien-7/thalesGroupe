import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotating-card',
  templateUrl: './rotating-card.component.html',
  styleUrls: ['./rotating-card.component.css']
})
export class RotatingCardComponent implements OnInit {
name:string = 'Bastien';
firstname:string = 'TERRIER';
job:string = 'Dev';
path: string = 'rotating_card_profile2.png';
  constructor() { }

  ngOnInit(): void {
  }

}
