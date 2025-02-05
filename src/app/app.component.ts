import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public finished: boolean = false
  public finishedSatus: string | undefined = undefined

  public finishRounds(event: string): void {
    this.finished = true
    this.finishedSatus = event
  }

  public tryAgain(): void {
    this.finished = false
    this.finishedSatus = undefined
  }
}
