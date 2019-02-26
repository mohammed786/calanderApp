import { CalanderAppPage } from './app.po';

describe('calander-app App', () => {
  let page: CalanderAppPage;

  beforeEach(() => {
    page = new CalanderAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
