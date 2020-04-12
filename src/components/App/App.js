import React from 'react';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Profile from '../Profile/Profile';
import Update from '../Update/Update';
import data from '../../data.json';

function App() {

    const list = data.profiles.map((profile) =>
        <li key={profile.id}>
            <Profile profile={profile} />
        </li>
    );

    return (
        <React.Fragment>
            <Header name="React" />
            <main>
                <Form />
                <ul class="o-grid">
                    {list}
                </ul>
                <Update />
            </main>
        </React.Fragment>
    );
}


export default App;