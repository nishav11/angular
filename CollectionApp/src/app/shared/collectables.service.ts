import {Collectable} from './collectables.model';

export class CollectableService {
  private collectables: Collectable [] = [
    {description: 'A vrey rare copy of "jQuery for dummies"', type: 'Book'},
    {description: 'The first Letter ever written', type: 'Piece of Paper'},
    {description: 'A photograph showing nothing', type: 'Photo'},
    {description: 'A book with all sold Zunes', type: 'Garbage'},
    {description: 'A must read book and best seller', type: 'Book'},
    {description: 'A photgraph of beautiful aurora borealis', type: 'Photo'}
  ];

  private collection: Collectable[] = [] ;
  getCollectables() {
      return this.collectables;
  }
  getCollection() {
      return this.collection;
  }
  addToCollection(item: Collectable) {
    if (this.collection.indexOf(item) !== -1) {
        return;
    }
    this.collection.push(item);
  }
  removeFromCollectables(item: Collectable){
    this.collectables.splice(this.collectables.indexOf(item), 1);
  }
  removeFromCollection(item: Collectable) {
    this.collection.splice(this.collection.indexOf(item), 1); {

    }
  }

}
