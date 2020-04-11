import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header class="c-header">
                <h1>{this.props.name} tutorial</h1>
            </header>
        )
    }
}

export default Header;
