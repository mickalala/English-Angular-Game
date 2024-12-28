import { Component } from '@angular/core';
import { Phrase } from '../shared/phrase.model';
import { PHRASES } from './phrases.mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css'
})
export class PainelComponent {
  public phrases: Phrase[] = PHRASES
  constructor() {
    // console.log(this.phrases)
  }
}
