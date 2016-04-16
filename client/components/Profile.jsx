import React from 'react';
import ReactMixin from 'react-mixin';

export default class Profile extends React.Component {

    constructor() {
        super();

        //bind instance methods to instance here
        this.initialState = this.initialState.bind(this);
        this.state = this.initialState();
    }

    getMeteorData(){
    /*
        var data = {}
        data.loaded = false;

        var handle = Meteor.subscribe('PUBLICATION');
        if(handle.ready()){
            data.loaded = true;
            //fetch data and add to data object
        }

        return data;
        */
    }


    initialState(){
        return {

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
        return (
            <div>
                Profile
                {this.props.params.username}
            </div>
        );
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
