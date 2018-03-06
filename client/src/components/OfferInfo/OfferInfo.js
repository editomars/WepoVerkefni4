import React from 'react';
import { connect } from 'react-redux';
import Offer from '../Offer/Offer';
import { getAllOffers } from '../../actions/offerActions';

class Offers extends React.Component {
    componentDidMount() {
        const { getAllOffers } = this.props;
        getAllOffers();
    }
    render() {
        const { offerDescription } = this.props;
        return (
            <div className="container">
                {offerDescription.map(p => <Offer key={p.id} offerDescription={p} />)}
            </div>
        );
    }
};

const mapStateToProps = ({ offerDescription }) => {
    return { offerDescription }
}

export default connect(mapStateToProps, { getAllOffers })(Offers);
