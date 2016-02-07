Content = new Mongo.Collection("content");

if (Meteor.isClient) {

  Template.main.helpers({
    contents: function () {
      return Content.find({id: 1});
    }
  });

  Template.content.events({
    'blur textarea': function () {
      Content.update(this._id, {
        $set: {text: event.target.value}
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    if (Content.find().count() === 0) {
      Content.insert({id: 1, text: 'this is awesome!'});
    }
  });
}
