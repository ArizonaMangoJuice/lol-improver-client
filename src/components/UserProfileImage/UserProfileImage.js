import React from 'react';

const UserProfileImage = ({src, styles}) => {
    return (
        <div className='user-image-container search-img'>
            <img alt='how the user sees themselves' className='user-image' src={src} />
        </div>
    )
}

export default UserProfileImage;