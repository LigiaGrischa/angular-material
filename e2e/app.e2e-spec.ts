import { MyBelugaPage } from './app.po';

describe('my-beluga App', () => {
  let page: MyBelugaPage;

  beforeEach(() => {
    page = new MyBelugaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
