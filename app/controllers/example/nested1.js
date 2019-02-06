import Controller from '@ember/controller';
import EmberObject, {computed} from '@ember/object';

export default Controller.extend({
  nested: Ember.computed('fullname.firstname','fullname.lastname',function(){
    return `${this.firstname} ${this.lastname}`;
  })
});
