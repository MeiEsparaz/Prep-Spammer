import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles = new Array<string>(); //Dichiaro un array di stringhe

  onClick(testo : HTMLInputElement, numero : HTMLInputElement)
  {
    let phrase = testo.value; //prende il valore della prima textbox
    let num = Number(numero.value); //prendo il valore della seconda textbox
    console.log (`dati ricevuti ${phrase} - ${num}`);
    //console.log ('dati ricevuti ' + phrase + '-' + num);
    for (let index = 0; index < num; index++) {
      this.articles.push(phrase);
    }
    return false;
  }
}
