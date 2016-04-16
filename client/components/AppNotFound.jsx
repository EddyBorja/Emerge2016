import React from 'react';

export default class AppNotFound extends React.Component {

    render(){
        return (
            <div>
                <h1>Page Not Found</h1>
            </div>
        );
    }

}

AppNotFound.propTypes = {
    //stringProp: React.PropTypes.string
};

AppNotFound.childContextTypes = {
    //muiTheme: React.PropTypes.object
};

AppNotFound.defaultProps = {
    //stringProp: 'defaultValue'
};
