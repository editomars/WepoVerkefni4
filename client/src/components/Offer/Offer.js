import React from 'react';
import { PropTypes } from 'prop-types';

const Offer = ({ offerDescription }) => {
    const { offer, price, validFor } = offerDescription;
    return (
        <div className="offer-wrapper">
            <div className="offer-description">{offer}</div>
            <div className="offer-price">Price: {price}</div>
            <div className="offer-valid">{validFor}</div>
        </div>
    );
};

Offer.propTypes = {
    offerDescription: PropTypes.shape({
        offer: PropTypes.string,
        price: PropTypes.number,
        validFor: PropTypes.string,
    })
};

export default Offer;
