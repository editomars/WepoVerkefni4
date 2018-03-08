import React from 'react';

class Cart extends React.Component {
    constructor(props) {
    	super(props);
  
    	if (this.getAllItemsInCart() == null) {
    		localStorage.setItem('pizza', JSON.stringify([])); // stringify gerir arrayið að streng
    	}
    };

    addToCart(pizza) {
    	var pizzaList = JSON.parse(localStorage.getItem('pizza'));
    	pizzaList.push(pizza);
    	localStorage.setItem('pizza', JSON.stringify(pizzaList));
    };


    getAllItemsInCart() {
    	return JSON.parse(localStorage.getItem('pizza'));
    };

    render() {
        return (
            <div className="aboutText">
    			<h2>This is your cart</h2>
            </div>
        );
    };
};

export default Cart;