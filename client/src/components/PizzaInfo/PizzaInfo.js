import React from 'react';
import { getPizzaInfo } from '../../actions/pizzaInfoActions';
import { connect } from 'react-redux';
import Pizza from '../Pizza/Pizza';

class PizzaDetails extends React.Component {
    componentDidMount() {
        // Dispatch action from Redux
        const { getPizzaDetails } = this.props;
        const { pizzaId } = this.props.match.params;

        getPizzaDetails(pizzaId);
    }
    render() {
        const { pizza } = this.props;
        return (
            <div className="container">
                <p>blabla</p>
            </div>
        );
    }
};

const mapStateToProps = ({ pizza }) => {
    return { pizza }
}

export default connect(mapStateToProps, { getPizzaDetails })(PizzaDetails);
