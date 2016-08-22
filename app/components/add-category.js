import Ember from 'ember';

export default Ember.Component.extend({
  addCategory: false,
  actions: {
    saveCategory() {
      var params = {

        name: this.get('name')
      };
      this.set('addCategory', false);
      this.sendAction('saveCategory', params);
    },
    addCategoryShow() {
      this.set('addCategory', true);
    }

  }
});
