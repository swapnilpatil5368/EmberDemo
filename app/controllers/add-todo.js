import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { isBlank } from '@ember/utils';
import { set, get } from '@ember/object';

export default Controller.extend({
	repo: service(),
	todoValue: '',
	actions: {
		createTodo(e) {
			
			this.set('todoValue', e.target.value.trim());
			if (e.keyCode === 13 && !isBlank(e.target.value)) {
				this.set('todoValue', e.target.value.trim());
				var nowDt = new Date();
				const value = e.target.value.trim() + ' - ' + nowDt.toDateString();
				this.repo.add({ title: value, completed: false });
				e.target.value = '';
				this.set('todoValue', '');
			}

		},
		addTodo() {
			if (this.todoValue) {
				var nowDt = new Date();
				const value = this.todoValue.trim() + ' - ' + nowDt.toDateString();
				this.repo.add({ title: value, completed: false });
				this.set('todoValue', '');
			}
		},
		clearCompleteItem() {
			const list = this.repo.findAll();
			if (list.length) {
				list.forEach(song => {
					if (song.completed) {
						setTimeout(() => {
							this.repo.delete(song);
						}, 0);
					}
				});
			}
		}
	}
});
