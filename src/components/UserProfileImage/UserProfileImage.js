import React from 'react';

const UserProfileImage = ({src, divStyles, imgStyles}) => {
    return (
        <div className={`user-image-container search-img ${divStyles}`}>
            <img alt='how the user sees themselves' className={`user-image ${imgStyles}`} src={src} />
        </div>
    )
}

export default UserProfileImage;