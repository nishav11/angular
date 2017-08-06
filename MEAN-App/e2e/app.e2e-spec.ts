import { MEANAppPage } from './app.po';

describe('mean-app App', () => {
  let page: MEANAppPage;

  beforeEach(() => {
    page = new MEANAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
