import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contact_results', {path: '/contact_results/:zip'});
  this.route('committee_results', {path: '/committee_results/:entity'});
});

export default Router;
