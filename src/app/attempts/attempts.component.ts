import { Component, Input, OnChanges } from '@angular/core';
import { Heart } from '../shared/heart.model';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrl: './attempts.component.css'
})
export class AttemptsComponent implements OnChanges {
  @Input() public attempts: number = 3

  public fullHeart: string = "/assets/icons8-heart-24.png"
  public linedHeart: string = "/assets/icons8-heart-241.png"

  public hearts: Heart[] = [
    new Heart(true), new Heart(true), new Heart(true)
  ]
  ngOnChanges() {
    console.log('attempts/atte pts: ', this.attempts)
    if (this.attempts !== this.hearts.length) {
      let idx = this.hearts.length - this.attempts;
      this.hearts[idx - 1].full = false
    }
  }
}
