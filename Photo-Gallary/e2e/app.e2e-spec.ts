import { PhotoGallaryPage } from './app.po';

describe('photo-gallary App', () => {
  let page: PhotoGallaryPage;

  beforeEach(() => {
    page = new PhotoGallaryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
