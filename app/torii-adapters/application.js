import Ember from 'ember';
import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';

export default ToriiFirebaseAdapter.extend({
  firebase: Ember.inject.service()
});

// export default Ember.Object.extend({
//   store: Ember.inject.service(), // inject the ember-data store

  // The authorization argument passed in to `session.open` here is
  // the result of the `torii.open(providerName)` promise
//   open: function(authorization){
//     var userId = authorization.user,
//         store  = this.get('store');
//     return store.find('user', userId).then(function(user){
//       return {
//         currentUser: user
//       };
//     });
//   }
// });
