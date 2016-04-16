import React from 'react';
import ReactMixin from 'react-mixin';

export default class Search extends React.Component {

    constructor() {
        super();

        //bind instance methods to instance here
        this.initialState = this.initialState.bind(this);
        this.state = this.initialState();
    }

    initialState(){
        return {

        };
    }

    getMeteorData(){
        /*
        var data = {}
        data.loaded = false;

        var handle = Meteor.subscribe('');
        if(handle.ready()){
            data.loaded = true;
            //fetch data and add to data object
        }

        return data;
        */
        return {};
    }

    render(){
        return (
            <div>
                Search
            </div>
        );
    }
}

Search.propTypes = {
    //stringProp: React.PropTypes.string
};

Search.childContextTypes = {
    //muiTheme: React.PropTypes.object
};

Search.defaultProps = {
    //stringProp: 'defaultValue'
};

ReactMixin(Search.prototype, ReactMeteorData);
