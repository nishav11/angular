import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Post {
  title: string;
  content: string;
}
interface PostId extends Post {
  postId: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  postCollection: AngularFirestoreCollection<Post>;
  posts: any;

  title1 : string;
  content1: string;

  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.postCollection = this.afs.collection('posts');
    //this.posts = this.postCollection.valueChanges();
    this.posts = this.postCollection.snapshotChanges()
    .map(actions => {
      return actions.map( a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return {id, data};
      })
    })
  }
  addPost() {
    //this.afs.collection('posts').add({'title': this.title1, 'content': this.content1});
    this.afs.collection('posts').add({'title': this.title1, 'content': this.content1});
  }
  getPost(postId){
    this.postDoc = this.afs.doc('posts/'+postId);
    this.post = this.postDoc.valueChanges();
  }
  deletePost(postId) {
    this.afs.doc('posts/'+postId).delete();
  }
}
