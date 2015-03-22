describe('toDoList homepage', function() {
  it('should have a title', function() {
    browser.get('http://localhost:3000/app.html');
    expect(browser.getTitle()).toEqual('To Do List');
  });

  it('should add a list item to toDoList', function() {
    browser.get('http://localhost:3000/app.html');
    element(by.model('text')).sendKeys("Go To School");
    element(by.id('button')).click();

    expect(element(by.id('para')).getText()).toEqual('Go To School');
  });

   it('by default should show all tasks that need to be completed', function() {
    browser.get('http://localhost:3000/app.html');
    element(by.model('text')).sendKeys("Go To School");
    element(by.id('button')).click();
    element(by.model('text')).sendKeys("Go Home");
    element(by.id('button')).click();
    expect(element(by.id('list')).getText()).toContain("Go To School" && "Go Home");
  });
});