import Ember from 'ember';

export default Ember.Component.extend({
  showListings: false,
  actions: {
    showListingsHide() {
      this.set('showListings', false);
    },
    showListingsShow() {
      this.set('showListings', true);
    },
  }
});
