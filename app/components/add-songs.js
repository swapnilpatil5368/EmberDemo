import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { set, get } from '@ember/object';

export default Component.extend({
    songrepo: service(),
    titleValue: '',
    artistValue: '',
    timeValue: '',
    errorMsg: '',
    actions: {
        addSong() {
            if (!this.titleValue.trim()) {
                // alert('Title field can not be empty.');
                this.set('errorMsg', 'Title field can not be empty.');
                return;
            }

            if (!this.artistValue.trim()) {
                // alert('Artist field can not be empty.');
                this.set('errorMsg', 'Artist field can not be empty.');
                return;
            }

            if (isNaN(this.timeValue)) {
                // alert('Enter valid time.');
                this.set('errorMsg', 'Enter valid time.');
                return;
            }

            if (this.titleValue && this.artistValue && this.timeValue) {
                this.set('errorMsg', '');
                this.songrepo.add({
                    title: this.titleValue.trim(),
                    artist: this.artistValue.trim(),
                    time: this.timeValue.trim() + 'min'
                });
                this.send('clearFields');
            }
        },

        resetFields() {
            this.set('errorMsg', '');
            if (this.titleValue || this.artistValue || this.timeValue) {
                const value = confirm('Do you want to clear the form ?');
                if (value) {
                    this.send('clearFields');
                }
            }
        },
        textchange(e) {
            if (e.target.id.includes('title')) {
                this.set('titleValue', e.target.value);
            }

            if (e.target.id.includes('artist')) {
                this.set('artistValue', e.target.value);
            }

            if (e.target.id.includes('time')) {
                this.set('timeValue', e.target.value);
            }

        },
        clearFields() {          
            this.set('titleValue', '');
            this.set('artistValue', '');
            this.set('timeValue', '');
        }
    }
});
