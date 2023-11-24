import React from 'react';

function Profile({signOut}) {
    return (
        <div>
            <h2>
                Profile
            </h2>
            <button onClick={()=>signOut()} >
                Sign out
            </button>
        </div>
    );
}

export default Profile;