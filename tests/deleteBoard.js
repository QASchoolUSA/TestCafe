import { Selector } from 'testcafe';

fixture `Testing the Trello Web Applications`
    .page `https://trello-demo-app.vercel.app`;


test('User should be able to delete the board', async t => {
    await t
        .click(Selector('a.navbar-brand'))
        .typeText(Selector('#boardName'), 'Board 1')
        .expect(Selector('#boardName').value).contains('Board 1')
        .click(Selector('.btn.btn-success'))

    await t
        .expect(Selector('.dropdown a.navbar-brand').innerText).eql(`Board 1`)
        .click(Selector('.btn.btn-danger').withText('Delete Current Board'))

    await t
        .expect(Selector('.dropdown a.navbar-brand').visible).notOk();
});