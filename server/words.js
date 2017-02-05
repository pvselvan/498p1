import { Words } from '../imports/api/words.js';

//server side function to delete all words
if (Meteor.isServer) {
  Meteor.startup(function() {
    return Meteor.methods({
      removeAllWords: function() {
        return Words.remove({});
      }
    });
  });
}