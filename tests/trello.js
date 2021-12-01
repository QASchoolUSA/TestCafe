import { Selector } from 'testcafe';

fixture `Trello Web Automation`
    .page `https://trello-demo-app.vercel.app`;

test('Test1', async t => {
    const newBoard = Selector('a.navbar-brand');
    await t
        .expect(newBoard.innerText).eql(`New Board`);
});