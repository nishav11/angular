import { Component, OnChanges, Input } from '@angular/core';
import { ImageService } from '../image-detail/shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {

  @Input() filterBy?: string = 'all'

  visibleImages: any[] = [];
  constructor(private imageService: ImageService) {
     this.visibleImages = this.imageService.getImages();

  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();

  }
}
