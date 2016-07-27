import React from 'react';
import AddressSelectForm from './component/AddressSelect';
import JQPage from './component/JQPage';
import { Router, Route, hashHistory, Link } from 'react-router';

var Nav = React.createClass({
    render(){
        return (<ul>
            <li><Link to="/jq">bootstrap</Link></li>
            <li><Link to="/address">address</Link></li>
            {this.props.children}
        </ul>);
    }
});

var Page = React.createClass({

    render(){
        return (<div>


            <Router history={hashHistory}>
                <Route path="/" component={Nav}>
                    <Route path="/jq" component={JQPage}/>
                    <Route path="/address" component={AddressSelectForm}/>
                </Route>
            </Router>
        </div>)
            ;
    }
});

export default Page;
