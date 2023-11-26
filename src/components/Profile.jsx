import React from 'react';

function Profile({signOut,user}) {
    return (
        <div>
            <h2>
                {user.name ? 'Profile' : 'No user'}
            </h2>
            <button onClick={()=>signOut()}>
                Sign out
            </button>
        </div>
    );
}

export default Profile;