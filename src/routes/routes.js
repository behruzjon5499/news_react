import React, {Component} from 'react';
import { BrowserRouter, Switch , Route,} from 'react-router-dom'
import Home from "../modules/home";
import Contact from "../modules/contact";


class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/contact" component={Contact}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;