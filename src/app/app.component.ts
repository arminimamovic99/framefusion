import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FrameFusion';

  rotateIcon(id: string) {
    const icon = document.getElementById(id);
    if (icon?.classList.contains('rotate-back')) {
      icon.classList.remove('rotate-back');
    }

    if (icon?.classList.contains('rotate-45')) {
      icon.classList.remove('rotate-45');
      icon.className += ' rotate-back';
      return;
    }

    if (!icon) return;
    icon.className += ' rotate-45';
  }
}
