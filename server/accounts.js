Accounts.onCreateUser((options, user) => {
    user.profile = {};
    user.profile.email = user.services.facebook.email;
    user.profile.first_name = user.services.facebook.first_name;
    user.profile.last_name = user.services.facebook.last_name;
    user.profile.avatar_url = "http://graph.facebook.com/" + user.services.facebook.id + "/picture?type=large";
    return user;
});

