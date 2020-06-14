import { set } from '@ember/object';
import { isBlank } from '@ember/utils';
import { scheduleOnce } from '@ember/runloop';
import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
	repo: service(),
	actions: {
		toggleCompleted(e) {
			let todo = this.todo;
			set(todo, 'completed', e.target.checked);
			this.repo.persist();
		},
		removeTodo() {
			this.repo.delete(this.todo);
		}
	},

});
