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
  public instruction: string = 'Traduza essa frase:'
  public answer: string | null = ''

  public round: number = 0
  public roundPhrase: Phrase = this.phrases[0]
  public progress: number = 0

  public attempts: number = 3

  constructor() {
    this.updateRound()
  }

  public updateAnswer(userAnswer: Event): void {
    this.answer = (<HTMLInputElement>userAnswer.target).value
  }

  public compareAnswer(): void {
    if (this.answer == this.roundPhrase.ptbrPhrase) {

      alert('Resposta correta!')
      this.round++
      this.progress = this.progress + Math.round(100 / this.phrases.length)

      this.updateRound()
    } else {
      alert('Resposta incorreta!')
      this.attempts--
      this.updateRound()
      if (this.attempts == -1) {
        alert('Acabaram as tentativas!')
      }
    }
  }

  public updateRound(): void {
    this.roundPhrase = this.phrases[this.round]
    this.answer = ''
  }
}
