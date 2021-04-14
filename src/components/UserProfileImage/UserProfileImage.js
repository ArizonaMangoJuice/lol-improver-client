import React from "react";

const UserProfileImage = ({ src, divStyles, imgStyles, altText }) => {
  return (
    <div className={`user-image-container search-img ${divStyles}`}>
      <img
        alt={altText ? altText : 'how the user sees themselves'}
        className={`user-image ${imgStyles}`}
        src={src}
      />
    </div>
  );
};

export default UserProfileImage;
