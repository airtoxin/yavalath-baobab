import nightmare from 'nightmare';
import assert from 'assert';

const URL = 'http://localhost:9999';

describe('yavalath-baobab', () => {
  let page;
  beforeEach(() => {
    page = nightmare({ show: true });
  });

  it('should show page', () => {
    const result = page
      .goto(URL)
      .title()
      .end()
      .then(title => assert.strictEqual(title, 'yavalath-baobab'));
    return result;
  });
});
