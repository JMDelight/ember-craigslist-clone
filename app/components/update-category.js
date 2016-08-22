import Ember from 'ember';

export default Ember.Component.extend({
  updateCategory: false,
  actions: {
    updateCategoryShow() {
      this.set('updateCategory', true);
    },
    saveUpdatedCategory(category) {
      category.save();
      this.set('updateCategory', false);
    }
  }
});
