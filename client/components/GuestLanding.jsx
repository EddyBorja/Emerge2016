import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import {Link} from 'react-router';

export default class GuestLanding extends React.Component {

    constructor(props) {
        super(props);

        //bind instance methods to instance here
        this.initialState = this.initialState.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = this.initialState();
    }

    initialState(){
        return {

        };
    }

    render(){
        return (
            <div>
                <h1>HitSend.io</h1>
                <p>Send so much cash to so many people.</p>
                <p>Powered by Visa Direct.</p>
                <RaisedButton
                    label="Log in with Facebook"
                    icon={<i className="fa fa-facebook-official" aria-hidden="true"></i>}
                    onClick={this.handleLogin}
                />
            </div>
        );
    }

    handleLogin(){
        Meteor.loginWithFacebook({}, (error) => {
            if(error){
                throw new Meteor.Error("Facebook Login Failed: ", error);
            }
        });
    }
}

GuestLanding.propTypes = {
    //stringProp: React.PropTypes.string
};

GuestLanding.childContextTypes = {
    //muiTheme: React.PropTypes.object
};

GuestLanding.defaultProps = {
    //stringProp: 'defaultValue'
};
