import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['video']
})
export class VideoDetailComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

}
