import React from 'react';

class Title extends React.Component {
    static propTypes = {
        name: React.PropTypes.string.isRequired
    };

    render(){
        React.Children.forEach(this.props.children, function(child, index){

        });

        return (<h4>{this.props.name}{this.props.children}</h4>);
    }
}

class SubTitle extends React.Component {
    static propTypes = {
        name: React.PropTypes.string.isRequired
    };

    render(){
        return (<a>{this.props.name}</a>);
    }
}

export {Title, SubTitle}

