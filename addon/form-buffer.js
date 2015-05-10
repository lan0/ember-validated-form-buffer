import Ember from 'ember';
import validatedBuffer from './validated-buffer';

export default function formBuffer(model, impl = {}) {
  return Ember.computed(model, function() {
    if (this.get(model)) {

      //This makes sure that model errors are displayed via the buffer correctly but only until the
      //property is modified again.
      Ember.keys(impl.validations || {}).forEach(function(key) {
        impl.validations[key]['api-errors'] = true;
      });

      return validatedBuffer(this.get(model), impl);
    }
    return Ember.Object.create({});
  });
}
