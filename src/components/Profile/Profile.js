import React from 'react';
import Avatar from '../Avatar/Avatar';
import Date from '../Date/Date';
import './Profile.scss';

class Profile extends React.Component {

    constructor() {
        super();
        this.state = {
            isActive: null
        }

        // This binding is necessary to make `this` work in the callback
        //this.toggleActive = this.toggleActive.bind(this);
    }

    componentDidMount() {
        if (this.props.profile.isActive) {
            this.setState({
                isActive: true
            })
        }
    }

    // https://reactjs.org/docs/handling-events.html
    toggleActive = () => { // with toggleActive(), I have to bind the function in the constructor
        this.setState({
            isActive: !this.state.isActive
        })
    }


    render() {
        var activeClass = this.state.isActive ? "--is-active" : "";
        return (
            <article class={"c-profile " + activeClass}>
                <Avatar avatarId={this.props.profile.id} alt={this.props.profile.name} />
                <div class="c-profile__content">
                    <h2 class="a-heading-2">{this.props.profile.name}</h2>
                    <Date birthdate={this.props.profile.birthdate} />
                </div>
                <div class="c-profile__actions">
                    <button type="button" class="a-button" onClick={this.toggleActive}>
                        {this.state.isActive ? 'Deactivate' : 'Activate'}
                    </button>
                </div>
            </article>
        )
    }
}

export default Profile;
