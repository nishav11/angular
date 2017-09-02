import { Component, OnInit } from '@angular/core';
import { CollectableService } from '../shared/collectables.service';
import { Collectable } from '../shared/collectables.model';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styles: []
})
export class CollectionComponent implements OnInit {
  collectedItems: Collectable [] = [];
  constructor(private collectableService: CollectableService) { }

  onRemoveFromCollection(item: Collectable) {
    this.collectableService.removeFromCollection(item);
    this.collectableService.addToCollectables(item);
  }
  ngOnInit() {
    this.collectedItems = this.collectableService.getCollection();
  }

}
