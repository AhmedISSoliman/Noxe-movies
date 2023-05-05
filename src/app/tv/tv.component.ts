import { Component, Input, OnInit,OnChanges } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit,OnChanges {
  @Input() title: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void{
    console.log("changesd")
  }

}
