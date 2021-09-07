import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  color:any = 'black';
  fontSize: number = 11;
  font:string= 'arial';
  constructor() { }

  ngOnInit(): void {
  }

}
