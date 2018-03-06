import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import reducers from './reducers/reducers';
import Container from './components/Container/Container';
import Menu from './components/Menu/Menu';
import OfferInfo from './components/OfferInfo/OfferInfo';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
const App = () => {
    return (
        <div>
            <NavigationBar logoImageUrl="http://unos.com/images/about/full/logos/4C/Uno_logo_blk13LG.jpg" />
            <Container>
                <Switch>
                    <Route exact path="/" render={() => {
                        return <Redirect to="/pizzas" />;
                    }} />
                    <Route exact path="/pizzas" component={Menu} />
                    <Route path="/about" component={About} />
                    <Route path="/offers" component={OfferInfo} />
                    <Route path="/cart" component={Cart} />
                </Switch>
            </Container>
        </div>
    )
};

ReactDOM.render(<Router><Provider store={createStore(reducers, applyMiddleware(thunk))}><App /></Provider></Router>, document.getElementById('app'));
