import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-color',
  templateUrl: './background-color.component.html',
  styleUrls: ['./background-color.component.css']
})
export class BackgroundColorComponent implements OnInit {

  readonly defaultBackgroundColor: string = 'grey';
  backgroundColor: string;

  constructor() { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultBackgroundColor;
  }

  changeBackgroundColor(newBackgroundColor:string): void {
    this.backgroundColor = newBackgroundColor;
  }
}
