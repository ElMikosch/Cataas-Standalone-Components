import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-routing-test',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './routing-test.component.html',
  styleUrls: ['./routing-test.component.scss']
})
export class RoutingTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
