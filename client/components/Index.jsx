import React from 'react';
import ReactMixin from 'react-mixin';
import GuestLanding from './GuestLanding.jsx';
import Search from './Search.jsx';

export default class Index extends React.Component {

    getMeteorData(){
        return {
            isLoggedIn: Meteor.userId() !== null
        };
    }

    render(){
        if(this.data.isLoggedIn){
            return <Search />
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

