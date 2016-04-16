
Meteor.methods({

    updateUserAccountDetails(creditCard, username){
    
        Meteor.users.update(Meteor.userId(), {$set: {creditCard: creditCard, 'profile.username': username}});
        return Meteor.user();
    }
});
