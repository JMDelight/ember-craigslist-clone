import Ember from 'ember';
import moment from 'moment';

export function dateDisplay(params) {
  var date = moment.unix(params[0] / 1000).format("MM-DD-YYYY h:mm:ss a");
  return date;
}

export default Ember.Helper.helper(dateDisplay);
