import React from 'react';
import ReactMixin from 'react-mixin';
import Header from './Header';


export default class App extends React.Component {

    constructor(props) {
        super(props);

        //bind instance methods to instance here
        this.header = this.header.bind(this);
    }
    
    
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
        return (
            <div>
                {this.header()}
                <div style={{"padding" : "0px"}}>
                    {this.props.children}
                </div>
            </div>
        );
    }

    header(){
        if(this.data.isLoggedIn && this.data.userDataLoaded){
            console.log("User data ", this.data.userData, Meteor.userId());
            return <Header avatar_url={this.data.userData.profile.avatar_url} />
        } else {
            return null;
        }
    }

}

App.propTypes = {
    //stringProp: React.PropTypes.string
};

App.defaultProps = {
    //stringProp: 'defaultValue'
};

ReactMixin(App.prototype, ReactMeteorData);
