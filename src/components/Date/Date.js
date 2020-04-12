import React from 'react';
import './Date.scss';

class Date extends React.Component {

    /* constructor() {
        super();
        this.state = {
            date: null
        }
    }

    componentDidMount() {
        this.setState({
            date: new Date
        })
    } */
    
    render() {
        return (
            <time class="c-date">{this.props.birthdate}</time>
        )
    }
};

export default Date;
