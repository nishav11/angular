import { Injectable } from '@angular/core';

@Injectable ()

export class ImageService {
    visibleImages = [];
    getImages() {
        return this.visibleImages = IMAGES.slice(0);
    }
    getImage(id: number) {
        return IMAGES.slice(0).find(image => image.id === id);
    }

}

const IMAGES = [
    {'id': 1, 'category': 'galaxy', 'caption': 'Beautiful Galaxy', 'url': 'assets/images/space_light_luster_94206_1920x1080.jpg'},
    {'id': 2, 'category': 'galaxy', 'caption': 'Beautiful Galaxy', 'url': 'assets/images/planet_clouds_light_star_94996_1920x1080.jpg' },
    {'id': 3, 'category': 'galaxy', 'caption': 'Beautiful Galaxy', 'url': 'assets/images/planet_universe_galaxy_stars_flash.jpg' },
    {'id': 4, 'category': 'galaxy', 'caption': 'Beautiful Galaxy', 'url': 'assets/images/orange_color_stars.jpg' },
    {'id': 5, 'category': 'galaxy', 'caption': 'Beautiful Galaxy', 'url': 'assets/images/e8ab.jpg' },
    {'id': 6, 'category': 'mountain', 'caption': 'Beautiful Mountains', 'url': 'assets/images/-nature-mountain.jpg' },
    {'id': 7, 'category': 'mountain', 'caption': 'Beautiful Mountains', 'url': 'assets/images/ansel-191414.jpg' },
    {'id': 8, 'category': 'mountain', 'caption': 'Beautiful Mountains', 'url': 'assets/images/maxresdefault (1).jpg' },
    {'id': 9, 'category': 'mountain', 'caption': 'Beautiful Mountains', 'url': 'assets/images/mountain.jpg' },
    {'id': 10, 'category': 'mountain', 'caption': 'Beautiful Mountains', 'url': 'assets/images/matterhorn-918442_960_720.jpg' },
    {'id': 11, 'category': 'nature', 'caption': 'Beautiful Sceneries', 'url': 'assets/images/Beauty-nature.jpg' },
    {'id': 12, 'category': 'nature', 'caption': 'Beautiful Sceneries', 'url': 'assets/images/Best-beach-background.jpg' },
    {'id': 13, 'category': 'nature', 'caption': 'Beautiful Sceneries', 'url': 'assets/images/maxresdefault.jpg' },
    {'id': 14, 'category': 'nature', 'caption': 'Beautiful Sceneries', 'url': 'assets/images/forest-wallpaper.jpg' },
    {'id': 15, 'category': 'nature', 'caption': 'Beautiful Sceneries', 'url': 'assets/images/Beautiful-Beach-Nature-Wallpaper.jpg' },
    {'id': 16, 'category': 'wallpaper', 'caption': 'Beautiful Wallpapers', 'url': 'assets/images/fresh-wallpaper.jpg' },
    {'id': 17, 'category': 'wallpaper', 'caption': 'Beautiful Wallpapers', 'url': 'assets/images/lightning.jpg' },
    {'id': 18, 'category': 'wallpaper', 'caption': 'Beautiful Wallpapers', 'url': 'assets/images/Green-grass.jpg' },
    {'id': 19, 'category': 'wallpaper', 'caption': 'Beautiful Wallpapers', 'url': 'assets/images/9a7e82f2678.jpg' },
    {'id': 20, 'category': 'wallpaper', 'caption': 'Beautiful Wallpapers', 'url': 'assets/images/eiffeltower.jpg' },

] ;
