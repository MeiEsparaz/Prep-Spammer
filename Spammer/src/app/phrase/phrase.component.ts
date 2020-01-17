import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-phrase',
  templateUrl: './phrase.component.html',
  styleUrls: ['./phrase.component.css']
})
export class PhraseComponent implements OnInit {
 @Input() phrase: string;
  constructor() { }

  ngOnInit() {
  }

}
