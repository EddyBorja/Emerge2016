import React from 'react';
import ReactMixin from 'react-mixin';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

export default class Setup extends React.Component {

    constructor() {
        super();

        //bind instance methods to instance here
        this.initialState = this.initialState.bind(this);
        this.state = this.initialState();
    }

    initialState(){
        return {
            creditCard: '',
            username: ''
        };
    }


    componentDidMount(){
        //this.handleLogin(); 
    }


    getMeteorData(){
        return {
            isLoggedIn: Meteor.userId() !== null
        };
    }

    render(){
        if(this.data.isLoggedIn){
            return this.renderDetailsForm();
        } else {
            return this.renderBlocked();
        }
    }

    handleLogin(){
        Meteor.loginWithFacebook({}, (error) => {
            if(error){
                throw new Meteor.Error("Facebook Login Failed: ", error);
            }
        });
    }

    renderDetailsForm(){
        return <div>
            <h1>Welcome to a better way to pay.</h1>
            <p>Finish setting up your account by entering the details below.</p>
            <TextField
                hintText="Visa Credit Card Number"
                value={this.state.creditCard}
                onChange={(e) => {this.setState({creditCard : e.target.value})}}
                /><br />
            <TextField
                hintText="Username"
                value={this.state.username}
                onChange={(e) => {this.setState({username: e.target.value})}}
                /><br />
            <RaisedButton
                label="Save"
                primary={true}
                icon={<i className="fa fa-save" />}
                onClick={this.handleSave}
            />
        </div>
    }

    renderBlocked(){
        return <div>
                <h1>Log in with Facebook to use HitSend.io</h1>
                <small>Be cool, we'll never post to Facebook.</small>
                </div>
    }

    handleSave(){
        
    }
}

Setup.propTypes = {
    //stringProp: React.PropTypes.string
};

Setup.childContextTypes = {
    //muiTheme: React.PropTypes.object
};

Setup.defaultProps = {
    //stringProp: 'defaultValue'
};

ReactMixin(Setup.prototype, ReactMeteorData);
