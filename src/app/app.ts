import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('grk');
  protected currentImage = signal('grk.jpeg');

  toggleImage() {
    this.currentImage.set(
      this.currentImage() === 'grk.jpeg' ? 'grk2.jpeg' : 'grk.jpeg'
    );
  }
}
