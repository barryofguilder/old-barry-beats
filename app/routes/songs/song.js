import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SongsSongRoute extends Route {
  @service store;

  model({ song_id }) {
    return this.store.findRecord('song', song_id);
  }
}
