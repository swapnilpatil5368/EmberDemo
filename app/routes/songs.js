import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    songrepo: service(),
    model() {
        return this.songrepo.findAll();
    }
});
