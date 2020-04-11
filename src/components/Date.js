import React from 'react';

class Date extends React.Component {
    
    render() {
        return (
            <time class="c-date">{this.props.birthdate}</time>
        )
    }
};

export default Date;
