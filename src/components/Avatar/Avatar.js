import React from 'react';
import './Avatar.scss';

class Avatar extends React.Component {
    render() {
        return (
            <div class="c-avatar">
                <img src={"https://api.adorable.io/avatars/285/" + this.props.avatarId + ".png"} alt={this.props.alt} />
            </div>
        )
    }
}

export default Avatar;
