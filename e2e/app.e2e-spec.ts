import { StylingAppPage } from './app.po';

describe('styling-app App', () => {
  let page: StylingAppPage;

  beforeEach(() => {
    page = new StylingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo()
        .then(() => page.getParagraphText())
        .then(text => expect(text).toEqual('My quotes'));
    });
});
