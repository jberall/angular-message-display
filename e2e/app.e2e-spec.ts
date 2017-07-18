import { CustomValueAccessorPage } from './app.po';

describe('custom-value-accessor App', () => {
  let page: CustomValueAccessorPage;

  beforeEach(() => {
    page = new CustomValueAccessorPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
