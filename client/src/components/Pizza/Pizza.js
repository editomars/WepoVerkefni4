import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Pizza = ({ pizza }) => {
    const { name, description, price, image } = pizza;
    return (
        <div className="pizza-wrapper">
            <div className="pizza-image">
                <Link to={`/pizzas/${pizza.id}`}>
                    <img src={image} alt=""/>
                </Link>
            </div>
            <div className="pizza-name">{name}</div>
            <div className="pizza-description">{description}</div>
            <div className="pizza-price">{price}</div>
        </div>
    );
};

Pizza.propTypes = {
    pizza: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string
    })
};

export default Pizza;
