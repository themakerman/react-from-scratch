import React from 'react'
import { connect } from 'react-redux';
import {
    defaultAction
} 
from '../actions/index';

class ReduxConnectedComponent extends React.Component {
    
    componentDidMount() {
        setTimeout(() => {
            this.props.defaultAction();
        }, 5000);
    }
    
    componentWillUpdate() {
        console.log('Updating the component')
    }
    
    render () {
        return (
            <div>
                Value is reducer is: {this.props.defaultReducer.is_default}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        defaultReducer: state.defaultReducer
    }
}
export default connect(mapStateToProps, { defaultAction })(ReduxConnectedComponent);