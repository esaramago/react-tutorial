import React from 'react';

class Date extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: '13423423' };
    }
    
    render() {
        return (
            <time class="c-date">{this.state.date}</time>
        )
    }
};

export default Date;
