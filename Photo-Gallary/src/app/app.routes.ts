import { Routes,RouterModule } from '@angular/router';
import {GalleryComponent} from './gallery/gallery.component';
import {ImageDetailComponent} from './image-detail/image-detail.component';

 const Router: Routes =  [
    {path: '', redirectTo: '/gallery', pathMatch: 'full'},
    {path: 'gallery', component: GalleryComponent},
    {path: 'image-detail/:id', component: ImageDetailComponent},
]
export const appRoutes = RouterModule.forRoot(Router);