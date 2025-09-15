import {useState} from 'react';

const Profile = () => {
    const [profile, setProfile] = useState({
        name: '', age: ''
    });

    const handleChange = e => {
        const {name, value} = e.target;

        setProfile((prevProfile) => ({
                ...prevProfile,
                [name]: value
            }
        ))
    }

    return (<div>
            <div>
                <label>Name: </label>
                <input type='text'
                       name='name'
                       value={profile.name}
                       onChange={handleChange}/>
            </div>
            <div>
                <label>Age:</label>
                <input type='text'
                       name='age'
                       value={profile.age}
                       onChange={handleChange}
                />
            </div>
            <div>
                <p>User {profile.name} is {profile.age} years old.</p>
            </div>
        </div>);
}

export default Profile;