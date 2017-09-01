import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers: [VideoService]

})
export class VideoCenterComponent implements OnInit {

  videos: Array<Video>;

  selectedVideo: Video;
  private hiddenNewVideo = true;
  constructor(private _videoService: VideoService) { }

  ngOnInit() {
    this._videoService.getVideos()
    .subscribe(resVideoData => this.videos = resVideoData);
  }
  onSelectVideo(video: any) {
    this.selectedVideo = video;
    this.hiddenNewVideo = true;
   console.log(this.selectedVideo);
    console.log('video is played');
  }

  onSubmitAddVideo(video: Video) {
    this._videoService.addVideo(video)
    .subscribe(resNewVideo => {
      this.videos.push(resNewVideo);
      this.hiddenNewVideo = true;
      this.selectedVideo = resNewVideo;

    });
  }
  onUpdateVideoEvent(video: Video) {
    this._videoService.updateVideo(video)
    .subscribe(resupdatedVideo => video = resupdatedVideo);
    this.selectedVideo = null;
  }

  newVideo( ) {
    this.hiddenNewVideo = false;
  }
  onDeleteVideoEvent(video: Video) {
    const videoArray = this.videos;
    this._videoService.deleteVideo(video)
    .subscribe(resDeleteVideo => {
      for (let i = 0; i < videoArray.length; i++ ) {
        if (videoArray[i]._id === video._id) {
          videoArray.splice(i, 1);
        }
      }
    });
    this.selectedVideo = null;
  }
}
