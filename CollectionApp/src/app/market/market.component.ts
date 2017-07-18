import { Component, OnInit } from '@angular/core';
import { CollectableService } from '../shared/collectables.service';
import { Collectable } from '../shared/collectables.model';
@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  collectables: Collectable[] = [];

  constructor(private collectableService: CollectableService) { }

   onAddToCollection(item: Collectable) {
    this.collectableService.addToCollection(item);
  }

  ngOnInit() {
    this.collectables = this.collectableService.getCollectables();
  }

}
