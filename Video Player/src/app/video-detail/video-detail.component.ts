import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['video']
})
export class VideoDetailComponent implements OnInit {


private editTitle =  false;

  constructor() { }

  ngOnInit() {
  }
   // tslint:disable-next-line:use-life-cycle-interface
   ngOnChanges() {
    this.editTitle = false;
   }

    onTitleClick() {
      this.editTitle = true;
    }
}
