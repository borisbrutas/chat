Meteor.publish("messages", function () {
    return Messages.find();
});

Meteor.startup(function () {
    Meteor.methods ({
        removeAllMessages: function () {
            return Messages.remove({});
        }
    });
    return Meteor.methods();
});