describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('http://localhost/angular-budget');

    element(by.model('searchSpends')).sendKeys('Swimming');
    // element(by.css('[value="add"]')).click();

    var spendList = element.all(by.repeater('spend in currentSpends'));
     expect(spendList.count()).toEqual(1);
     //expect(todoList.get(1).getText()).toEqual('Shopping (Aldi)');

    // // You wrote your first test, cross it off the list
    // todoList.get(2).element(by.css('input')).click();
    // var completedAmount = element.all(by.css('.done-true'));
    // expect(completedAmount.count()).toEqual(2);
  });
});