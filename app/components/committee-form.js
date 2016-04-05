import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    committeeLookupHouse() {
      var params = "house";
      this.sendAction('committeeLookup', params);
    },
    committeeLookupSenate() {
      var params = "senate";
      this.sendAction('committeeLookup', params);
    },
    committeeLookupJoint() {
      var params = "joint";
      this.sendAction('committeeLookup', params);
    }
  }
});
