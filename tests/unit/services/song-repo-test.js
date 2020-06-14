import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | song-repo', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:song-repo');
    assert.ok(service);
  });
});
