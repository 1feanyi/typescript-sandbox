import { HelloTypescriptPage } from './app.po';

describe('hello-typescript App', () => {
  let page: HelloTypescriptPage;

  beforeEach(() => {
    page = new HelloTypescriptPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
