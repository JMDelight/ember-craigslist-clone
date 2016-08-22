import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      listings: this.store.findAll('listing')
    });
  },
  actions: {
    saveCategory(params) {
    var newCategory = this.store.createRecord('category', params);
      newCategory.save();
      this.transitionTo('admin');
    },
    saveListing(params) {
      var newListing =this.store.createRecord('listing', params);
      var category = params.category;
      category.get('listings').addObject(newListing);
      newListing.save().then(function() {
        return category.save();
      });
      this.transitionTo('admin');
    }
  }
});
