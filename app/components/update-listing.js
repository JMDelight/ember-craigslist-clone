import Ember from 'ember';

export default Ember.Component.extend({
  updateListing: false,
  actions: {
    saveUpdatedListing(listing) {
      listing.save();
      this.set('updateListing', false);
    },
    updateListingShow() {
      this.set('updateListing', true);
    }
  }

});
