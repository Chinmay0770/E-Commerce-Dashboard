import React from 'react';

const Profile = ()=>{
    const name = JSON.parse(localStorage.getItem('user')).name;
    const email = JSON.parse(localStorage.getItem('user')).email;
    return(
        <div>
            <h1>Name : {name}</h1>


            
            <h1>Email : {email}</h1>
        </div>
    );
}

export default Profile;