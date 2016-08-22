import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  timestamp: DS.attr(),
  username: DS.attr(),
  category: DS.belongsTo('category', {async: true})
});
