import { Selector } from 'testcafe';

fixture `Testing the Trello Web Applications`
    .page `https://trello-demo-app.vercel.app`;


  test('The user is not able to create a board without providing a name', async t => {

        // Expect to see New Board button, if displayed, click on the button
        // const newBoard = Selector('a.navbar-brand');
        await t
            .expect(Selector('a.navbar-brand').innerText).eql('New Board');
        await t
            .click(Selector('a.navbar-brand'))

        // var boardName = Selector('#boardName');
        // const addBoardButton = Selector('.btn.btn-success');

        await t
            .expect(Selector('#boardName').value).eql('')
        await t
            .expect(Selector('.btn.btn-success').hasAttribute('disabled')).ok();

    });

test('The user is able to name the Trello board', async t => {

      await t
          .expect(Selector('a.navbar-brand').innerText).eql(`New Board`);

      await t
          .click(Selector('a.navbar-brand'))

      await t
          .typeText(Selector('#boardName'), 'Board 1')
          .expect(Selector('#boardName').value).contains('Board 1')

});

test('The user is able to add the board with a given name', async t => {
      await t
        .click(Selector('a.navbar-brand'))
        .typeText(Selector('#boardName'), 'Board 1')
        .expect(Selector('#boardName').value).contains('Board 1')
        .pressKey('enter')

      await t
          .pressKey('enter')

      await t
          .expect(Selector('.dropdown a.navbar-brand').innerText).eql(`Board 1`);
});
