import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReact: false,
            statusClass: ''
        };
    }

    componentDidMount() {
        //runs after the component output has been rendered to the DOM

        window.setTimeout(() => {
            this.setStatus();
        }, 4000);
    }

    setStatus() {
        // change state
        /* 
            // Wrong
            this.state.comment = 'Hello';
            
            // Correct (use setState())
            this.setState({ comment: 'Hello' });
        */

        if (this.props.name === 'React') {

            this.setState({
                isReact: true,
                statusClass: '--success'
            });

            // you could use this form instead
            /*
            this.setState((state, props) => ({
                isReact: true,
                statusClass: '--success'
            }));
            */

        }
    }

    render() {
        return (
            <header class={"c-header " + this.state.statusClass}>
                <h1>{this.props.name} tutorial {this.state.isReact ? '!!' : '??'}</h1>
            </header>
        )
    }
}

export default Header;
