import { Component } from '@angular/core';
import { CatOMatComponent } from './components/cat-omat/cat-omat.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CatOMatComponent]
})
export class AppComponent {
  title = 'Cataas';
}
