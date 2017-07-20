import { MyAlmanacPage } from './app.po';

describe('my-almanac App', () => {
  let page: MyAlmanacPage;

  beforeEach(() => {
    page = new MyAlmanacPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
