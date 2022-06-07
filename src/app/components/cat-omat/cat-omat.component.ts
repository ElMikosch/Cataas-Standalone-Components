import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CatGetterService } from 'src/app/services/cat-getter.service';

@Component({
  selector: 'app-cat-omat',
  templateUrl: './cat-omat.component.html',
  styleUrls: ['./cat-omat.component.scss'],
  standalone: true,
  imports: [FormsModule],
  providers: [CatGetterService]
})
export class CatOMatComponent implements OnInit {

  catImage!: string;
  catMessage!: string;

  constructor(private catGetter: CatGetterService) { }

  async ngOnInit() {
    this.catImage = await this.catGetter.getCat("HAPPY BURGER DAY!");
  }

  async getCat() {
    this.catImage = await this.catGetter.getCat(this.catMessage);
  }

}
