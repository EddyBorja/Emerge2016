import React from 'react';
import ReactMixin from 'react-mixin';
import GuestLanding from './GuestLanding.jsx';
import Search from './Search.jsx';
import Setup from './Setup.jsx';

export default class Index extends React.Component {

    getMeteorData(){
        var data = {}
        data.isLoggedIn = Meteor.userId() !== null;
        data.userDataLoaded = false;
        
        var userSub = Meteor.subscribe('userData', Meteor.userId()); 
        if(userSub.ready()){
            var userArray = Meteor.users.find({_id : Meteor.userId()}).fetch();
            data.userData = userArray[0];
            data.userDataLoaded = true;
        }
        
        return data;
    }

    render(){
        if(this.data.isLoggedIn){
            if(!this.data.userDataLoaded){
                return <div>Loading</div>
            }

            if(!this.data.userData.profile.username){
                return <Setup />
            } else {
                return <Search />
            }
        } else {
            return <GuestLanding />
        }
    }

}

Index.propTypes = {
    //stringProp: React.PropTypes.string
};

Index.defaultProps = {
    //stringProp: 'defaultValue'
};

ReactMixin(Index.prototype, ReactMeteorData);

