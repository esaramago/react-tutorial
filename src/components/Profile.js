import React from 'react';
import Avatar from './Avatar';
import Date from './Date';

class Profile extends React.Component {
    render() {
        return (
            <article class="c-profile">
                <Avatar avatarId={this.props.profile.id} alt={this.props.profile.name} />
                <div>
                    <h2 class="c-heading-2">{this.props.profile.name}</h2>
                    <Date birthdate={this.props.profile.birthdate} />
                </div>
            </article>
        )
    }
}

export default Profile;
