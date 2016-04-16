
Meteor.publish('userData', (userId) => {
    var fields = {'profile' : 1}
    return Meteor.users.find({_id: userId}, {fields : fields});
});

Meteor.publish('username', (username) => {
    return Meteor.users.find({'profile.username': username});
});
