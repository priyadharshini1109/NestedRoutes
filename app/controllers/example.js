import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';

export default Controller.extend({
  firstname: 'Tony',
  lastname: 'Stark',
  fullname: Ember.computed('firstname','lastname',function(){
    return `${this.firstname} ${this.lastname}`;
  })
});
