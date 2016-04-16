import React from 'react';
import Paper from 'material-ui/lib/paper';

export default class Header extends React.Component {

    render(){
        return (
            <div style={{//"position" : "absolute", 
                         //"top" : "0", 
                         //"left" : "0", 
                         "height" : "54px", 
                         "padding" : "6px"}}>
                HitSend
                <img src={this.props.avatar_url} style={{"float" : "right", "borderRadius" : "21px", "height" : "42px"}}/> 
            </div>
        );
    }

}

Header.propTypes = {
    //stringProp: React.PropTypes.string
};

Header.childContextTypes = {
    //muiTheme: React.PropTypes.object
};

Header.defaultProps = {
    //stringProp: 'defaultValue'
};
