import React from 'react';
import ReactMixin from 'react-mixin';

export default class App extends React.Component {

    getMeteorData(){
        return {
            isLoggedIn: Meteor.userId !== null
        };
    }

    render(){
        return (
            <div>
                <div style={{"padding" : "16px"}}>
                    {this.props.children}
                </div>
            </div>
        );
    }

}

App.propTypes = {
    //stringProp: React.PropTypes.string
};

App.defaultProps = {
    //stringProp: 'defaultValue'
};

ReactMixin(App.prototype, ReactMeteorData);
