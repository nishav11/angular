import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['video'],
  // tslint:disable-next-line:use-output-property-decorator
  outputs: ['updateVideoEvent', 'deleteVideoEvent']
})
export class VideoDetailComponent implements OnInit {
  video: any;


private editTitle =  false;
private updateVideoEvent = new EventEmitter();
private deleteVideoEvent = new EventEmitter();
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

    updateVideo() {
      this.updateVideoEvent.emit(this.video);
    }

    deleteVideo() {
      this.deleteVideoEvent.emit(this.video);
    }


}
