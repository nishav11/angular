import { Angular2FunPage } from './app.po';

describe('angular2-fun App', () => {
  let page: Angular2FunPage;

  beforeEach(() => {
    page = new Angular2FunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
