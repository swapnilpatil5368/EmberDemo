import Service from '@ember/service';

export default Service.extend({
    lastId: 0,
	list: [],
	findAll() {
		if(this.list.length){
			return this.list;
		}else{
			this.set('list', JSON.parse(window.localStorage.getItem('songs') || '[]'));
			return this.list;
		}		
	},

	add(attrs) {
		let song = Object.assign({ id: this.incrementProperty('lastId') }, attrs);
		this.list.pushObject(song);
		this.persist();
		return song;
	},

	delete(song) {
		this.list.removeObject(song);
		this.persist();
	},

	persist() {
		window.localStorage.setItem('songs', JSON.stringify(this.list));
	}
});
