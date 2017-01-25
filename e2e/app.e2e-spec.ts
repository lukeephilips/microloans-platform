import { MicrofinancePlatformPage } from './app.po';

describe('microfinance-platform App', function() {
  let page: MicrofinancePlatformPage;

  beforeEach(() => {
    page = new MicrofinancePlatformPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
