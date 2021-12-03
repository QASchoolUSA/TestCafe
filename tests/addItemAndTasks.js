import { Selector } from 'testcafe';

fixture `Testing the Trello Web Applications`
    .page `https://trello-demo-app.vercel.app`;


    test('User should be able to click on new item and new item component is displayed', async t => {
          await t
            .click(Selector('a.navbar-brand'))
            .typeText(Selector('#boardName'), 'Board 1')
            .expect(Selector('#boardName').value).contains('Board 1')
            .click(Selector('.btn.btn-success'))

          await t
              .expect(Selector('.dropdown a.navbar-brand').innerText).eql(`Board 1`)

          await t
              .expect(Selector('.btn.btn-success').withText('New Item'))
              .click(Selector('.btn.btn-success'))

          await t
              .expect(Selector('div.panel').visible).ok()
    });