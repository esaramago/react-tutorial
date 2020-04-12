import React from "react";
import './Form.scss';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            nameText: 'N/D',
            avatarId: '',
            avatarIdText: 'N/D',
            birthdate: '',
            birthdateText: 'N/D',
        }
    }

    changeName = (e) => {
        this.setState({
            name: e.target.value,
            nameText: e.target.value || '<span>N/D</span>'
        })
        
    }
    changeAvatarId = (e) => {
        this.setState({
            avatarId: e.target.value,
            avatarIdText: e.target.value || '<span>N/D</span>'
        })
        
    }
    changeBirthdate = (e) => {
        this.setState({
            birthdate: e.target.value,
            birthdateText: e.target.value || '<span>N/D</span>'
        })
        
    }
    submitProfile = (e) => {
        e.preventDefault();
        console.log('added');

        /* this.setState({
            name: '',
            avatarId: null,
            birthdate: null
        }) */
    }

    render() {
        return (
            <React.Fragment>
                <form class="c-form" onSubmit={this.submitProfile}>
                    <h2 class="a-heading-2">Create new Profile</h2>
                    <div className="o-grid">
                        <div>
                            <label htmlFor="name">Name</label>
                            <input id="name" type="text" value={this.state.name} onChange={this.changeName} placeholder="Choose a name" maxLength="20" />
                        </div>
                        <div>
                            <label htmlFor="avatarId">Avatar id</label>
                            <input id="avatarId" type="number" value={this.state.avatarId} onChange={this.changeAvatarId} min="1" />
                        </div>
                        <div>
                            <label htmlFor="birthdate">Birthdate</label>
                            <input id="birthdate" type="date" value={this.state.birthdate} onChange={this.changeBirthdate} max="2020-04-12" />
                        </div>
                        <div class="u-align-self-end">
                            <button type="submit" class="a-button">Create</button>
                        </div>
                    </div>
                </form>

                <p>
                    Name: <strong>{this.state.nameText}</strong>;
                    Avatar Id: <strong>{this.state.avatarIdText}</strong>;
                    Birthdate: <strong>{this.state.birthdateText}</strong>;
                </p>
            </React.Fragment>
        )
    }
}

export default Form;