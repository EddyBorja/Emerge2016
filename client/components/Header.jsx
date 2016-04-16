import React from 'react';
import Paper from 'material-ui/lib/paper';

export default class Header extends React.Component {

    render(){
        return (
            <Paper zDepth={1} style={{"height" : "48px"}}>
                HitSend.io
                <img src={this.props.avatar_url} style={{"float" : "right"}}/> 
            </Paper>
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
