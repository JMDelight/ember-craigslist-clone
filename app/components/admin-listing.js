import Ember from 'ember';

export default Ember.Component.extend({
  showListings: false,
  sortBy: ['title:asc'],
  sortedListings: Ember.computed.sort('listings', 'sortBy'),
  actions: {
    showListingsHide() {
      this.set('showListings', false);
    },
    showListingsShow() {
      this.set('showListings', true);
    },

  }
});
