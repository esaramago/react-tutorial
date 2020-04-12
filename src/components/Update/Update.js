import React from 'react';
import './Update.scss';

class Update extends React.Component {
    constructor() {
        super();

        // The only place where you can assign this.state is the constructor.
        this.state = {
            date: Math.random()
        };
    }
    
    componentDidMount() {
        //runs after the component output has been rendered to the DOM
        
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {

        // change state
        /* 
            // Wrong
            this.state.comment = 'Hello';
            
            // Correct (use setState())
            this.setState({ comment: 'Hello' });
        */

        this.setState({
            date: Math.random()
        });
    }

    render() {
        return (
            <div class="c-update">{this.state.date}</div>
        )
    }
}

export default Update;