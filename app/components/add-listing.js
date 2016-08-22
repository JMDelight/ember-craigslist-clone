import Ember from 'ember';

export default Ember.Component.extend({
  addListing: false,
  actions: {
    addListingShow() {
      this.set('addListing', true);
    },
    saveListing() {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        username: this.get('username'),
        timestamp: Date.now(),
        category: this.get('category')
      };
      this.set('addListing', false);
      this.sendAction('saveListing', params);
    }
  }
});
