import { List } from './text-list';

describe('text-list', () => {
  it('test', async () => {
    const list = await new List();
    expect(list).toBeTruthy();
  });
});
