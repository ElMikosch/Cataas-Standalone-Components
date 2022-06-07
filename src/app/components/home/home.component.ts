import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatOMatComponent } from '../cat-omat/cat-omat.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CatOMatComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
