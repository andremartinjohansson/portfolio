import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  downloadPdf(pdfUrl: string, pdfName: string ) {
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  constructor(private titleService:Title) {
    this.titleService.setTitle("Resume - André Martin Johansson");
  }

  ngOnInit(): void {
  }

}
