import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ImageService } from  '../image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ImageListComponent implements OnInit {

  images : any[];
  imagesFound: boolean = false;
  searching: boolean = false;
  constructor(private imageService: ImageService) { }

  handleSucces(data) {
    this.imagesFound = true;
    this.images = data.hits;
    console.log(data.hits);
  }

  handleError(error){
    console.log(error);
  }

  ngOnInit() {
  }

  seachImages(query: string) {
    this.searching = true;
    return this.imageService.getImages(query).subscribe(
      data => this.handleSucces(data),
      error => this.handleError(error),
      () => this.searching = false
    )
  }

}
