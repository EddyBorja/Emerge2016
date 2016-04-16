import {push} from 'react-router-redux';
import {store} from './router.jsx';

Accounts.onLogin(() => {
    const user = Meteor.user();
    console.log("logged in");
    
    if(!user.profile.visa || !user.profile.username){
        console.log("No username");
        store.dispatch(push('/setup'));
    } else {
        store.dispatch(push('/' + user.profile.username));
    }

});
