import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup(params) {
      this.transitionTo('contact_results', params.zip)
    },
    committeeLookup(params) {
      this.transitionTo('committee_results', params)
    }
  }
});
