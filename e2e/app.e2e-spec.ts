import { KrolestwoZajecyPage } from './app.po';

describe('krolestwo-zajecy App', () => {
  let page: KrolestwoZajecyPage;

  beforeEach(() => {
    page = new KrolestwoZajecyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
