import Ember from 'ember';

export default Ember.Component.extend({
  filter: null,
  // filteredListはtutorialにはあるけど多分不要
  // filteredList: null,
  actions: {
    autoComplete() {
      this.get('autoComplete')(this.get('filter'));
    },
    search() {
      this.get('search')(this.get('filter'));
    },
    choose(city) {
      this.set('filter', city);
    }
  }
});
