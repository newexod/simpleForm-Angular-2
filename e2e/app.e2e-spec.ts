import { SimpleFormAngular2Page } from './app.po';

describe('simple-form-angular2 App', () => {
  let page: SimpleFormAngular2Page;

  beforeEach(() => {
    page = new SimpleFormAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
