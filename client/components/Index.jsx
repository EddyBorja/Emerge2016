import React from 'react';
import ReactMixin from 'react-mixin';

export default class Index extends React.Component {

    getMeteorData(){
        return {
            isLoggedIn: Meteor.userId !== null
        };
    }

    render(){
        return <div>Index</div>
    }

}

Index.propTypes = {
    //stringProp: React.PropTypes.string
};

Index.defaultProps = {
    //stringProp: 'defaultValue'
};

ReactMixin(Index.prototype, ReactMeteorData);

