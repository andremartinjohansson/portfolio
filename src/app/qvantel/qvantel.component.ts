import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-qvantel',
  templateUrl: './qvantel.component.html',
  styleUrls: ['./qvantel.component.scss']
})
export class QvantelComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Qvantel - André Martin Johansson");
  }

  ngOnInit(): void {
  }

}
