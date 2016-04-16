import React from 'react';
import ReactMixin from 'react-mixin';
import TextField from 'material-ui/lib/text-field';
import CurrencyInput from 'react-number-input';
import RaisedButton from 'material-ui/lib/raised-button';

export default class Profile extends React.Component {

    constructor() {
        super();

        //bind instance methods to instance here
        this.initialState = this.initialState.bind(this);
        this.state = this.initialState();
    }

    getMeteorData(){
        var data = {}
        data.userData = null;
        data.userDataLoaded = false;

        var userSub = Meteor.subscribe('username', this.props.params.username); 
        if(userSub.ready()){
            var userArray = Meteor.users.find({'profile.username' : this.props.params.username}).fetch();
            if(userArray.length > 0){
                data.userData = userArray[0];
            }
            data.userDataLoaded = true;
        }

        return data;
    }


    initialState(){
        return {
            inputCash: 0,
            note: "",
        };
    }

    //componentWillMount(){}

    //componentDidMount(){}

    //componentWillUnmount(){}

    //shouldComponentUpdate(nextProps, nextState){}
    
    //componentWillUpdate(nextProps, nextState){}

    //componentDidUpdate(prevProps, prevState){}

    //componentWillReceiveProps(nextProps){}

    render(){
        if(!this.data.userDataLoaded){
            return <div>Loading</div>
        }

        if(!this.data.userData){

            return <div>No user with username {this.props.params.username}</div>
        }

        return (
            <div className="profileHeader" 
                    style={{
                         "height" : "400px", 
                         "color" : "#FFFFFF"}}>

                <div style={{"maxWidth" : "500px", "margin" : "0 auto"}}>
                    <div>
                        <div>
                            <h1>{this.userFullName()}</h1>
                            <img src={this.data.userData.profile.avatar_url} 
                               style={{"height" : "180px", 
                                       "padding" : "3px",
                                       "borderRadius" : "99px",
                                       "border" : "solid 6px #FFFFFF"}} />
                        </div>
                        <div style={{"height" : "120px", 
                                     "float" : "right", }}>
                            <CurrencyInput 
                                            format='$0,0.00'
                                            value={this.state.inputCash}
                                            min={0}
                                            max={20000}
                                            onChange={(e) => {
                                                const value = parseFloat(e.target.value)
                                                this.setState({inputCash: value});
                                              }}
                                             className="inputCash" /> 
                            <textarea value={this.state.note}
                                    onChange={(e) => {
                                        this.setState({note : e.target.value});
                                    }}
                                    className="inputNote" 
                                    placeholder="Write a note..."></textarea>
                            <RaisedButton
                                label="Send"
                                primary={true}
                                style={{"width" : "100%"}}
                                icon={<i className="fa fa-send whiteIcon"></i>}
                                />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    userFullName(){
        return this.data.userData.profile.first_name + " " + this.data.userData.profile.last_name;
    }
}

Profile.propTypes = {
    //stringProp: React.PropTypes.string
};

Profile.childContextTypes = {
    //muiTheme: React.PropTypes.object
};

Profile.defaultProps = {
    //stringProp: 'defaultValue'
};

ReactMixin(Profile.prototype, ReactMeteorData);
